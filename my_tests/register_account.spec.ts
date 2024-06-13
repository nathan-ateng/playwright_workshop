import { test, expect } from "@playwright/test";

test("Register New Account", async ({ page }) => {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  );

  const firstName = page.locator("#input-firstname").fill("nathan");
  const lastName = page.locator("#input-lastname").fill("smith");
  const email = page.locator("#input-email").fill("smith@me.com");
  const tel = page.locator("#input-telephone").fill("2223345");
  const password = page.locator("#input-password").fill("kempachi");
  const confirmPassword = page.locator("#input-confirm").fill("kempachi");

  await page.locator("[name = 'agree']").check();
  await page.locator("[value='continue']");
});
