class MainPage {
  open (path) {
    return browser.url(process.env.BASE_URL)
  }

  acceptAllCookies() {
    const cookieModal = require('../components/cookie.modal')
    return cookieModal.acceptButton.click()
  }

  get videoFrame() {
    return $('[data-autoid=Video-1]')
  }

  get carSafetyLink() {
    return $('[data-autoid="iconCallouts:cta"]')
  }
  
}

module.exports = new MainPage()
