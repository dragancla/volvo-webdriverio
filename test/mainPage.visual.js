const mainPage = require("../structure/pages/main.page");
const navbar = require("../structure/components/navbar.component");

describe("visual regression test", () => {
  before("navigate to webpage", async () => {
    await mainPage.open();
    // Wait for the page to load properly
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === "complete"),
      {
        timeout: 5000,
        timeoutMsg: "Page failed to load within 5 seconds",
      }
    );
  });

  it("should verify that cookie consent is correct", async () => {
    await expect(
      await browser.checkScreen("cookie_consent", {
        hideElements: [await $(mainPage.video)],
      })
    ).toEqual(0);
  });

  it("should verify that the navbar is correct", async () => {
    await mainPage.acceptAllCookies();
    await expect(
      await browser.checkElement(await $(navbar.header), "navbar_header")
    ).toEqual(0);
  });

  it("should verify that the main page is correct", async () => {
    await expect(
      await browser.checkFullPageScreen("mainpage_full", {
        hideElements: [await $(mainPage.video), await $(navbar.header)],
      })
    ).toBeLessThanOrEqual(0.1);
  });
});
