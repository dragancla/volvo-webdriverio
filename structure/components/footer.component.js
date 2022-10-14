class Footer {
  get cookiesButton() {
    return $$('[data-autoid="footer:links"]')[0]
  }

  get legalButton() {
    return $$('[data-autoid="footer:links"]')[1]
  }

  get privacyButton() {
    return $$('[data-autoid="footer:links"]')[2]
  }

  get socialMediaButton() {
    return $$('[data-autoid="footer:links"]')[3]
  }

  get tellUsButton() {
    return $$('[data-autoid="footer:links"]')[4]
  }

  get copyrightBanner() {
    return $('[data-autoid="footer:copyright"]')
  }

}

module.exports = new Footer()
