import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  const emailId = await page.locator("#input-email");
  const password = await page.locator("#input-password");
  const loginBtn = await page.locator("[value='Login']");

  await emailId.fill("boscojohn@me.com");
  await password.fill("kempachi");
  await loginBtn.click();

  const title = await page.title();
  await page.screenshot({ path: "./my_tests/screen_shots/homepage.png" });
  expect(title).toEqual("My Account");

  page.close();
});
