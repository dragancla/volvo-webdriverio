const mainPage = require("../structure/pages/main.page");
const cookieModal = require("../structure/components/cookie.modal");

describe("cookie test", () => {
  before("navigate to webpage", async () => {
    await mainPage.open();
  });

  it("should verify all cookie consent buttons and toggles exist", async () => {
    await expect(cookieModal.cookieBanner).toBeExisting();
    await expect(cookieModal.acceptButton).toBeExisting();
    await expect(cookieModal.settingsButton).toBeExisting();
    await cookieModal.settingsButton.click();
    await expect(cookieModal.performanceCookiesToggle).toBeExisting();
    await expect(cookieModal.functionalCookiesToggle).toBeExisting();
    await expect(cookieModal.advertisingCookiesToggle).toBeExisting();
    await expect(cookieModal.statisticsCookiesToggle).toBeExisting();
    await expect(cookieModal.acceptAllButton).toBeExisting();
  });

  it("should make allow all button disappear when all toggles enabled", async () => {
    await cookieModal.settingsButton.click();
    await cookieModal.performanceCookiesToggle.click();
    await cookieModal.functionalCookiesToggle.click();
    await cookieModal.advertisingCookiesToggle.click();
    await expect(cookieModal.acceptAllButton).not.toBeDisplayed();
  });

  it("should be able to accept all cookies and close cookie banner", async () => {
    await cookieModal.settingsButton.click();
    await cookieModal.acceptAllButton.click();
    await browser.refresh();
    await expect(cookieModal.cookieBanner).not.toBeDisplayed();
  });

  afterEach("delete cookies and refresh", async () => {
    await browser.deleteCookies();
    browser.refresh();
  });
});
