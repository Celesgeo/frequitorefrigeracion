import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const url = "http://127.0.0.1:5173/?v=window1";
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

function measure() {
  const section = document.querySelector(".fixed-image-reveal");
  const bg = document.querySelector(".fixed-image-reveal__background");
  const overlay = document.querySelector(".fixed-image-reveal__overlay");
  const content = document.querySelector(".fixed-image-reveal__content");
  const faq = document.querySelector("#preguntas");
  if (!section || !bg || !overlay || !content || !faq) {
    return { missing: true };
  }
  const bgStyle = getComputedStyle(bg);
  const overlayStyle = getComputedStyle(overlay);
  const faqStyle = getComputedStyle(faq);
  return {
    scrollY: window.scrollY,
    sectionTop: section.getBoundingClientRect().top,
    sectionHeight: section.getBoundingClientRect().height,
    bg: {
      position: bgStyle.position,
      top: bg.getBoundingClientRect().top,
      height: bg.getBoundingClientRect().height,
    },
    overlay: {
      position: overlayStyle.position,
      background: overlayStyle.backgroundColor,
    },
    contentTop: content.getBoundingClientRect().top,
    faq: {
      top: faq.getBoundingClientRect().top,
      bg: faqStyle.backgroundColor,
    },
    copy: {
      eyebrow: content.querySelector(".fixed-image-reveal__eyebrow")?.textContent?.trim(),
      heading: content.querySelector("h2")?.textContent?.trim(),
      cta: content.querySelector("a")?.textContent?.trim(),
    },
  };
}

await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle0", timeout: 45000 });
await page.addStyleTag({ content: "html { scroll-behavior: auto !important; }" });

await page.screenshot({ path: new URL("w-1440-hero.png", outDir).pathname });

await page.$eval("#servicios", (el) => el.scrollIntoView({ block: "start" }));
await page.screenshot({ path: new URL("w-1440-services.png", outDir).pathname });

const before = await page.evaluate(() => {
  const section = document.querySelector(".fixed-image-reveal");
  window.scrollTo(0, section.getBoundingClientRect().top + window.scrollY - 420);
});
await new Promise((r) => setTimeout(r, 200));
const approaching = await page.evaluate(measure);
await page.screenshot({ path: new URL("w-1440-window-approach.png", outDir).pathname });

await page.$eval(".fixed-image-reveal", (el) => el.scrollIntoView({ block: "start" }));
await new Promise((r) => setTimeout(r, 200));
const atStart = await page.evaluate(measure);
await page.screenshot({ path: new URL("w-1440-window-start.png", outDir).pathname });

await page.evaluate(() => window.scrollBy(0, 280));
await new Promise((r) => setTimeout(r, 200));
const afterScroll = await page.evaluate(measure);
await page.screenshot({ path: new URL("w-1440-window-mid.png", outDir).pathname });

await page.$eval("#preguntas", (el) => el.scrollIntoView({ block: "start" }));
await new Promise((r) => setTimeout(r, 200));
const faqCover = await page.evaluate(measure);
await page.screenshot({ path: new URL("w-1440-faq.png", outDir).pathname });

await page.setViewport({ width: 390, height: 844 });
await page.goto(url, { waitUntil: "networkidle0" });
await page.$eval(".fixed-image-reveal", (el) => el.scrollIntoView({ block: "start" }));
const mobile = await page.evaluate(measure);
await page.screenshot({ path: new URL("w-390-window.png", outDir).pathname });

const bgStayedFixed =
  atStart.bg.position === "fixed" &&
  afterScroll.bg.position === "fixed" &&
  Math.abs(atStart.bg.top - afterScroll.bg.top) < 2 &&
  Math.abs(afterScroll.contentTop - atStart.contentTop) > 80;

console.log(
  JSON.stringify(
    {
      errors,
      bgStayedFixed,
      approaching,
      atStart,
      afterScroll,
      faqCover,
      mobile,
    },
    null,
    2,
  ),
);

await browser.close();
