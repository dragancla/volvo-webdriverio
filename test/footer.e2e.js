const mainPage = require('../structure/pages/main.page')
const footer = require('../structure/components/footer.component')

describe('footer test', () => {
  before('navigate to webpage', async () => {
    await mainPage.open()
    await mainPage.acceptAllCookies()
  })

  it('should verify all footer links exist', async () => {
    await expect(footer.cookiesButton).toBeExisting()
    await expect(footer.legalButton).toBeExisting()
    await expect(footer.privacyButton).toBeExisting()
    await expect(footer.socialMediaButton).toBeExisting()
    await expect(footer.tellUsButton).toBeExisting()
  })

  it('should verify footer copyright banner exists', async () => {
    await expect(footer.copyrightBanner).toBeExisting()
  })
})


