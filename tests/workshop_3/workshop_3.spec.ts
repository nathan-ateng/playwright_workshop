import { test, expect } from "@playwright/test";

test("Drag and drop", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/hovers/");
  await page.hover("//div[@class='container']//div[1]//img[1]");
  expect(
    await page.textContent("//h5[normalize-space()='name: user1']")
  ).toEqual("name: user1");
  await page.waitForTimeout(30000000000);
});
