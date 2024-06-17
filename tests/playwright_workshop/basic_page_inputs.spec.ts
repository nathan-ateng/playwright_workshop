import { expect, test } from "@playwright/test";

test.skip("Basic page input", async ({ page }) => {
  // Launch webpage
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );

  // locate message input field and save it to a variable
  const messageInput = page.locator("input[id='user-message']");

  await messageInput.scrollIntoViewIfNeeded();
  console.log("Before entering data: " + (await messageInput.inputValue()));
  // Fill the input field and assert the placeholder
  await messageInput.type("hi there");
  expect(await messageInput).toHaveAttribute(
    "placeholder",
    "Please enter your Message"
  );

  console.log("After entering data: ", +(await messageInput.inputValue()));
});

test.skip("Basic input for sum of numbers ", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  let num1 = 4;
  let num2 = 5;
  let num1Input = await page.locator("#sum1");
  let num2Input = await page.locator("#sum2");
  let displayResult = await page.locator("#addmessage");
  let getSum = await page.locator("//button[text()='Get Sum']");
  let expectedResult = num1 + num2;
  await num1Input.type("" + num1);
  await num2Input.fill("" + num2);

  await getSum.click();
  expect(displayResult).toHaveText("" + expectedResult);
  console.log(await displayResult.textContent());
});

test("Single CheckBox", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  const singleCheckbox = page.locator("#isAgeSelected");
  await singleCheckbox.check();
  expect(singleCheckbox).toBeChecked();
});
