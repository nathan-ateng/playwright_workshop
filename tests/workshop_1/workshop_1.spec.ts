import { test } from "@playwright/test";

test.skip("Basic Navigation", async ({ page }) => {
  await page.goto("https://github.com/");
  await page.waitForTimeout(3000);
  await page.reload();
});

test.skip("Interacting with elements", async ({ page }) => {
  await page.goto("https://github.com/");
  await page
    .locator(
      "div[class='col-11 text-left pl-2 pl-sm-0 mt-n4'] a[class='btn-mktg home-campaign-enterprise btn-muted-mktg']"
    )
    .click();

  await page.waitForTimeout(5000);
});

test("Various Locator Methods", async ({ page }) => {
  await page.goto("https://github.com/");
  await page
    .getByRole("button", { name: "Sign up for GitHub" })
    .first()
    .click();

  await page.waitForTimeout(4000);
});
