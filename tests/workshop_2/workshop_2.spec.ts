import { test, expect } from "@playwright/test";

test.skip("Automatic form submission", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  const newTodo = await page.getByPlaceholder("What needs to be done?");
  await newTodo.fill("Journal");
  await newTodo.press("Enter");

  await newTodo.fill("Feed Dog");
  await newTodo.press("Enter");

  await page.waitForTimeout(3000);

  const firstTodo = await page.getByTestId("todo-item").nth(0);
  await firstTodo.getByRole("checkbox").check();
  await page.waitForTimeout(3000);

  const secondTodo = await page.getByTestId("todo-item").nth(1);
  await expect(secondTodo).not.toHaveClass("completed");
  await expect(firstTodo).toHaveClass("completed");
  await page.waitForTimeout(3000);
});

test("Handling form", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  const placeaHolder = "[placeholder='What needs to be done?']";
  await page.fill(placeaHolder, "John Doe");
  await page.locator(placeaHolder).press("Enter");

  const checkBox = await page.locator(".toggle");
  await checkBox.check();

  await page.waitForTimeout(3000);
});
