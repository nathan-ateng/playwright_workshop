import { test, expect } from "@playwright/test";
test.skip("Handling basic alerts", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);
    await alert.accept();
  });

  await page
    .locator(
      "button[class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']"
    )
    .click();
});

test("Handling dynamic alerts(OK)", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  page.on("dialog", async (alert) => {
    expect(alert.message()).toEqual("Press a button!");
    await alert.accept();
  });

  await page
    .locator(
      "p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']"
    )
    .click();

  expect(await page.locator("#confirm-demo").textContent()).toEqual(
    "You pressed OK!"
  );
});

test("Handling dynamic alerts(Dismiss)", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  page.on("dialog", async (alert) => {
    expect(alert.message()).toEqual("Press a button!");
    await alert.dismiss();
  });

  await page
    .locator(
      "p[class='text-gray-900 text-size-16 mt-10 text-black font-bold'] button[type='button']"
    )
    .click();

  expect(await page.locator("#confirm-demo").textContent()).toEqual(
    "You pressed Cancel!"
  );
});

test.only("Handling dynamic alerts(Input)", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  page.on("dialog", async (alert) => {
    expect(alert.message()).toEqual("Please enter your name");
    await alert.accept("nathan");
  });

  await page
    .locator("div:nth-child(3) p:nth-child(1) button:nth-child(1)")
    .click();

  expect(await page.locator("#prompt-demo").textContent()).toContain("nathan");
});
