import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const chrome =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const url = "http://127.0.0.1:5173/";
const outDir = new URL("../.verify/", import.meta.url);

await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ["--no-sandbox", "--disable-gpu"],
});

const page = await browser.newPage();
const consoleErrors = [];
page.on("pageerror", (error) => consoleErrors.push(error.message));
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});

const viewports = [
  { name: "360", width: 360, height: 800 },
  { name: "390", width: 390, height: 844 },
  { name: "768", width: 768, height: 1024 },
  { name: "1024", width: 1024, height: 768 },
  { name: "1440", width: 1440, height: 900 },
];

const report = { consoleErrors: [], viewports: [], checks: {} };

await page.setViewport(viewports[0]);
await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
await page.waitForSelector("h1");
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

for (const viewport of viewports) {
  await page.setViewport(viewport);
  await new Promise((resolve) => setTimeout(resolve, 250));
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      overflowX: doc.scrollWidth - doc.clientWidth,
    };
  });
  await page.screenshot({
    path: new URL(`${viewport.name}.png`, outDir).pathname,
    fullPage: false,
  });
  report.viewports.push({ ...viewport, ...overflow });
}

for (const [name, selector] of [
  ["servicios-390", "#servicios"],
  ["contacto-390", "#contacto"],
]) {
  await page.setViewport({ width: 390, height: 844 });
  await page.$eval(selector, (el) => el.scrollIntoView({ block: "start" }));
  await new Promise((resolve) => setTimeout(resolve, 700));
  await page.screenshot({ path: new URL(`${name}.png`, outDir).pathname });
}

await page.setViewport({ width: 1440, height: 900 });
await page.$eval("#contacto", (el) => el.scrollIntoView({ block: "start" }));
await new Promise((resolve) => setTimeout(resolve, 700));
await page.screenshot({ path: new URL("contacto-1440.png", outDir).pathname });
await page.$eval("footer", (el) => el.scrollIntoView({ block: "start" }));
await new Promise((resolve) => setTimeout(resolve, 700));
await page.screenshot({ path: new URL("footer-1440.png", outDir).pathname });
await page.setViewport({ width: 1024, height: 768 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.screenshot({ path: new URL("1024-after.png", outDir).pathname });

await page.setViewport({ width: 390, height: 844 });
const menuButton = await page.$('button[aria-controls="mobile-menu"]');
report.checks.hasMobileMenuButton = Boolean(menuButton);
if (menuButton) {
  await menuButton.click();
  await new Promise((resolve) => setTimeout(resolve, 200));
  report.checks.menuExpanded = await page.$eval(
    'button[aria-controls="mobile-menu"]',
    (el) => el.getAttribute("aria-expanded"),
  );
  const menuVisible = await page.$eval("#mobile-menu", (el) => !el.hidden && getComputedStyle(el).display !== "none");
  report.checks.menuVisible = menuVisible;
  await page.click('#mobile-menu a[href="#servicios"]');
  await new Promise((resolve) => setTimeout(resolve, 300));
  report.checks.menuClosesOnNav = await page.$eval(
    'button[aria-controls="mobile-menu"]',
    (el) => el.getAttribute("aria-expanded"),
  );
}

await page.setViewport({ width: 1440, height: 900 });
report.checks.whatsappHrefs = await page.$$eval('a[href*="wa.me"]', (anchors) =>
  [...new Set(anchors.map((a) => a.href))],
);

await page.click('button[type="submit"]');
await new Promise((resolve) => setTimeout(resolve, 200));
report.checks.formShowsErrors = await page.$$eval('[id$="-error"]', (nodes) =>
  nodes.map((node) => node.textContent?.trim()).filter(Boolean),
);

await page.type("#name", "Ana Perez");
await page.type("#phone", "3804975680");
await page.select("#clientType", "hogar");
await page.select("#service", "diagnostico");
await page.type("#description", "El equipo no enfria en el living desde ayer.");
await page.click('input[type="checkbox"]');

const popupPromise = new Promise((resolve) => {
  browser.once("targetcreated", async (target) => {
    const popup = await target.page();
    const popupUrl = popup?.url() ?? target.url();
    resolve(popupUrl);
  });
  setTimeout(() => resolve(null), 4000);
});

await page.click('button[type="submit"]');
report.checks.whatsappPopup = await popupPromise;
report.checks.formStatus = await page.$eval('[role="status"]', (el) => el.textContent?.trim()).catch(() => null);

report.checks.title = await page.title();
report.checks.h1 = await page.$eval("h1", (el) => el.textContent?.trim());
report.checks.hasTestimonials = await page.$("#opiniones").then(Boolean);
report.checks.hasBeforeAfter = await page.$("#antes-despues").then(Boolean);
report.checks.hasEmailLink = await page.$('a[href^="mailto:"]').then(Boolean);
report.checks.whatsappNumberVisible = await page.evaluate(() =>
  document.body.innerText.includes("+54 9 3804 975680"),
);
report.checks.hoursLabel = await page.evaluate(() =>
  document.body.innerText.includes("Atención con coordinación previa"),
);
report.checks.credit = await page.evaluate(() =>
  document.body.innerText.includes("Diseño y desarrollo por CSTUDIODEVS"),
);
report.consoleErrors = consoleErrors;

console.log(JSON.stringify(report, null, 2));
await browser.close();
