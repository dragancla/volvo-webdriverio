const mainPage = require("../structure/pages/main.page");
const navbar = require("../structure/components/navbar.component");

describe("navbar test", () => {
  before("navigate to webpage", async () => {
    await mainPage.open();
    await mainPage.acceptAllCookies();
  });

  it("should verify all navbar cars categories exist and are clickable", async () => {
    await navbar.carsButton.click();
    await expect(navbar.carsDrawer).toBeExisting();
    await expect(navbar.carsDrawer).toHaveAttr("aria-hidden", "false");
    await expect(navbar.electricCategory).toBeExisting();
    await navbar.electricCategory.click();
    await expect(navbar.hibridCategory).toBeExisting();
    await navbar.hibridCategory.click();
    await expect(navbar.mildCategory).toBeExisting();
    await navbar.mildCategory.click();
    await expect(navbar.carsCloseButton).toBeExisting();
    await navbar.carsCloseButton.click();
  });

  it("should verify all navbar menu buttons exist", async () => {
    await navbar.menuButton.click();
    await expect(navbar.menuDrawer).toHaveAttr("aria-hidden", "false");
    await expect(navbar.buyButton).toBeExisting();
    await expect(navbar.ownButton).toBeExisting();
    await expect(navbar.aboutButton).toBeExisting();
    await expect(navbar.exploreButton).toBeExisting();
    await expect(navbar.moreButton).toBeExisting();
    await expect(navbar.menuCloseButton).toHaveAttr("aria-expanded", "true");
    await expect(navbar.navBackdrop).toHaveAttr("aria-hidden", "false");
  });
});
