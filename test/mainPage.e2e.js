const mainPage = require('../structure/pages/main.page')

describe('main page test', () => {
  before('navigate to webpage', async () => {
    await mainPage.open()
    await mainPage.acceptAllCookies()
  })

  it('should verify that the video frame exists', async () => {
    await expect(mainPage.videoFrame).toBeExisting()
  })

  it('should verify that the car safety link exists', async () => {
    await expect(mainPage.carSafetyLink).toBeExisting()
  })
})


