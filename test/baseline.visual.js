const fsPromises = require("fs").promises;

const mainPage = require("../structure/pages/main.page");
const navbar = require("../structure/components/navbar.component");

describe("generate baseline images", () => {
  before("remove old baseline screenshots and open main page", async () => {
    await fsPromises.rm("./screenshots/baseline", {
      recursive: true,
      force: true,
    });
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

  it("should generate cookie consent baseline", async () => {
    await browser.saveScreen("cookie_consent", {
      hideElements: [await $(mainPage.video)],
    });
  });

  it("should generate navbar baseline", async () => {
    await mainPage.acceptAllCookies();
    await browser.saveElement(await $(navbar.header), "navbar_header");
  });

  it("should generate main page baseline", async () => {
    await browser.saveFullPageScreen("mainpage_full", {
      hideElements: [await $(mainPage.video), await $(navbar.header)],
    });
  });

  after("should copy new screenshots to baseline folder", async () => {
    await fsPromises.rename("./results/actual", "./screenshots/baseline");
  });
});
