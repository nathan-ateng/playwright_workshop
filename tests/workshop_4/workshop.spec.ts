import { test, expect } from "@playwright/test";

test.skip("Handling alert", async ({ page }) => {
  let alertMessage;
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    alertMessage = await dialog.message();
    await page.waitForTimeout(3000);
    await dialog.accept();
  });
  await page
    .locator("//button[contains(text(),'click the button to display an')]")
    .click();
  expect(alertMessage).toBe("I am an alert box!");
});

test("Cancel alert", async ({ page }) => {
  let alertMessage;
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  await page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    alertMessage = await dialog.message();
    ///await page.waitForTimeout(3000);
    await dialog.dismiss();
  });
  await page.click("//a[normalize-space()='Alert with OK & Cancel']");
  await page.waitForTimeout(3000);

  //   expect(await page.locator("#demo").textContent()).toContain(
  //     "You Pressed Cancel"
  //   );

  const message1 = await page.locator("#demo");
  await console.log(message1.textContent());
});
