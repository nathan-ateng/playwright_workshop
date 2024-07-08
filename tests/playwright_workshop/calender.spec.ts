import { test } from "@playwright/test";

test("Handling calenders", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  let date = "1994-06-25";

  await page.fill("#birthday", date);
  await page.waitForTimeout(3000);
});

test.only("Handling calenders using moment", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  await page.click("//input[@placeholder='Start date']");
  const mmYY = await page.locator(
    "div[class='datepicker-days'] th[class='datepicker-switch']"
  );
  const prev = await page.locator(
    "//div[@class='datepicker-days']//th[@class='prev'][normalize-space()='«']"
  );
  const next = await page.locator(
    "//div[@class='datepicker-days']//th[@class='next'][normalize-space()='»']"
  );

  await page.click("//td[@class='day'][normalize-space()='4']");
  //   await mmYY.click();

  await page.waitForTimeout(3000);
});
//table[@class='table-condensed']//th[@class='datepicker-switch'][1]
