import { test, expect } from "@playwright/test";
// test generated using playwright codegen
// NOTE: Code needs polishing
 
test("test", async ({ page }) => {
  await page.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
  );
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("E-Mail Address").click();
  await page.getByPlaceholder("E-Mail Address").fill("tester@me.com");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("tester");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: " Edit your account" }).click();
  await page.getByPlaceholder("Last Name").click();
  await page.getByPlaceholder("Last Name").fill("tester2");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByRole("button", { name: " My account" }).click();
  await page.getByRole("link", { name: "Logout", exact: true }).click();
});
