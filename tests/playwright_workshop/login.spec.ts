import { test, expect } from "@playwright/test";

// store email and password in variales
const email = "tester@me.com";
const password = "tester";
test.only("Login using Hover", async ({ page }) => {
  // launch the home page
  await page.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
  );

  // Hover over My account and clock login
  await page.hover(
    "//a[@role='button']//span[@class='title'][normalize-space()='My account']"
  );
  await page.click("'Login'");

  // locate the email and password fields
  // Fill them with the email and password variables
  await page.locator("#input-email").fill(email);
  await page.locator("#input-password").fill(password);

  // Locate the Login button and click it
  await page.click("//input[@value='Login']");

  await page.waitForTimeout(5000);
});

test("Login fron Login page", async ({ page }) => {
  //launch the login page
  await page.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );
  // locate the email and password fields
  // Fill them with the email and password variables
  await page.locator("#input-email").fill(email);
  await page.locator("#input-password").fill(password);

  // Locate the Login button and click it
  await page.click("//input[@value='Login']");

  await page.waitForTimeout(3000);
});
