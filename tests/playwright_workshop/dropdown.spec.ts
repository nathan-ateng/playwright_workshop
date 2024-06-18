import { test } from "@playwright/test";

test.skip("Handling single select dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  await page.selectOption("#select-demo", {
    //label: "Monday",
    //value: "Monday",
    index: 0,
  });

  await page.waitForTimeout(3000);
});

test("Handling multiple select dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  await page.selectOption("#multi-select", [
    {
      label: "California",
    },
    {
      label: "Florida",
    },
  ]);

  await page.waitForTimeout(3000);
});
