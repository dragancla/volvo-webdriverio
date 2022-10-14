const mainPage = require('../structure/pages/main.page')
const navbar = require('../structure/components/navbar.component')

describe('navbar test', () => {
  before('navigate to webpage', async () => {
    await mainPage.open()
    await mainPage.acceptAllCookies()
  })

  it('should verify both navbar buttons exist', async () => {
    await expect(navbar.carsButton).toBeExisting()
    await expect(navbar.menuButton).toBeExisting()
  })

  it('should verify all navbar menu buttons exist', async () => {
    await navbar.menuButton.click()
    await expect(navbar.buyButton).toBeExisting()
    await expect(navbar.ownButton).toBeExisting()
    await expect(navbar.aboutButton).toBeExisting()
    await expect(navbar.exploreButton).toBeExisting()
    await expect(navbar.moreButton).toBeExisting()
    await expect(navbar.menuCloseButton).toBeExisting()
    await navbar.menuCloseButton.click()
  })

  it('should verify all navbar cars categories exist and are clickable', async () => {
    await navbar.carsButton.click()
    await expect(navbar.electricCategory).toBeExisting()
    await navbar.electricCategory.click()
    await expect(navbar.hibridCategory).toBeExisting()
    await navbar.hibridCategory.click()
    await expect(navbar.mildCategory).toBeExisting()
    await navbar.mildCategory.click()
    await expect(navbar.carsCloseButton).toBeExisting()
    await navbar.carsCloseButton.click()
  })

  afterEach('refresh', async () => {
    browser.refresh()
  })
})


