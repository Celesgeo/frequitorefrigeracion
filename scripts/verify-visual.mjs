import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const url = "http://127.0.0.1:5173/?v=visual2";
const outDir = new URL("../.verify/", import.meta.url);
await mkdir(outDir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ["--no-sandbox", "--disable-gpu"],
});
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await page.setViewport({ width: 390, height: 844 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 45000 });
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });
await page.screenshot({ path: new URL("v2-390-hero.png", outDir).pathname });

const menuBtn = await page.$('button[aria-controls="mobile-menu"]');
await menuBtn?.click();
await new Promise((r) => setTimeout(r, 400));
const menuOpen = await page.$eval("#mobile-menu", (el) => el.className.includes("is-open"));
await page.screenshot({ path: new URL("v2-390-menu.png", outDir).pathname });
await page.click('#mobile-menu a[href="#servicios"]');
await new Promise((r) => setTimeout(r, 500));

await page.$eval("#servicios", (el) => el.scrollIntoView({ block: "start" }));
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: new URL("v2-390-services.png", outDir).pathname });

await page.$eval("#proceso", (el) => el.scrollIntoView({ block: "start" }));
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: new URL("v2-390-process.png", outDir).pathname });

await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.screenshot({ path: new URL("v2-1440-hero.png", outDir).pathname });
await page.$eval("#servicios", (el) => el.scrollIntoView({ block: "start" }));
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: new URL("v2-1440-services.png", outDir).pathname });
await page.$eval("#proceso", (el) => el.scrollIntoView({ block: "start" }));
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: new URL("v2-1440-process.png", outDir).pathname });
await page.$eval("#contacto", (el) => el.scrollIntoView({ block: "start" }));
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: new URL("v2-1440-contact.png", outDir).pathname });

const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
const wa = await page.$$eval('a[href*="wa.me/5493804975680"]', (as) => as.length);
const consult = await page.$$eval("a", (as) =>
  as.filter((a) => /Consultar/.test(a.textContent || "")).map((a) => a.href).slice(0, 4),
);

console.log(JSON.stringify({ errors, menuOpen, overflow, wa, consult }, null, 2));
await browser.close();
