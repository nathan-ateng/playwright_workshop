import { test, expect } from "@playwright/test";

test("Interscting with single window tabs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );

  console.log(page.url());

  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("//a[normalize-space()='Follow On Twitter']"),
  ]);
  console.log(newWindow.url());
});

test.only("Interscting with multiple window tabs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );

  console.log(page.url());

  const [multiPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("//a[normalize-space()='Follow Twitter & Facebook']"),
  ]);

  await multiPage.waitForLoadState();
  const pages = multiPage.context().pages();
  console.log("No. of tabs:" + pages.length);

  pages.forEach((tab) => {
    console.log(tab.url());
  });
});
