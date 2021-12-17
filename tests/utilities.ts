import { chromium } from "playwright";

declare global {
    interface Window {
        browser?: Browser;
    }
}

export async function navigateTo(url: string){
  window.browser = await chromium.launch()
  const page = await window.browser.newPage()

  const normalizedUrl = url.startsWith("/") && process.env.BASE_URL
    ? `${process.env.BASE_URL}${url}`
    : url

  await page.goto(normalizedUrl);
  document.body.innerHTML = await page.content()
}
