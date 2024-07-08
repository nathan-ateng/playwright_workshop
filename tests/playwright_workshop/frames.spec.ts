import { test, expect } from "@playwright/test";

test("Interacting with frames", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const allFrames = page.frames();
  console.log("No of frames:" + allFrames.length);

  const myFrame = page.frame("firstFr");

  await myFrame?.fill("input[name='fname']", "John");
  await myFrame?.fill("input[name='lname']", "Doe");

  expect(
    await myFrame?.locator("//p[@class='title has-text-info']").textContent()
  ).toContain("You have entered");

  const innerFrame = page.frame("innerFrame");

  await innerFrame?.fill(
    "//input[@placeholder='Enter email']",
    "tester@test.com"
  );
  await page.waitForTimeout(3000);
});
