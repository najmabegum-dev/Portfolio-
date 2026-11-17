import AxeBuilder from "@axe-core/playwright";
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
  await expect(page.getByRole("link", { name: "Skip to content" })).toHaveAttribute(
    "href",
    "#main",
  );
  await expect(page.getByRole("navigation", { name: "Main" })).toContainText("Work");
});

test("theme toggle and layout meet accessibility checks in light and dark modes", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.addInitScript(() => localStorage.removeItem("theme"));
  await page.goto("/");

  const themeToggle = page.getByRole("button", { name: "Toggle color theme" });
  const root = page.locator("html");
  await expect(root).toHaveAttribute("data-theme", "light");
  await expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);

  await themeToggle.click();
  await expect(root).toHaveAttribute("data-theme", "dark");
  await expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});

test("mobile navigation opens and closes as an accessible disclosure", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const toggle = page.getByRole("button", { name: "Open navigation" });
  const navigation = page.getByRole("navigation", {
    name: "Mobile navigation",
  });

  await toggle.click();
  await expect(page.getByRole("button", { name: "Close navigation" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await expect(navigation).toBeVisible();
  await expect(navigation.getByRole("link", { name: "Work" })).toBeVisible();
  await navigation.getByRole("button", { name: "Close menu" }).click();
  await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await expect(navigation).toBeHidden();
});
