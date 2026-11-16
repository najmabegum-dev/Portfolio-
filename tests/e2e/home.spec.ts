import { expect, test } from "@playwright/test";

test("home page introduces the portfolio", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Beyond prompts\.\s*Into systems\./,
  );
  await expect(page.getByRole("link", { name: "GitHub profile" })).toHaveAttribute(
    "href",
    "https://github.com/najmabegum-dev",
  );
});
