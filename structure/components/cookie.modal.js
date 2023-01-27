class CookieModal {
  get cookieBanner() {
    return $("#onetrust-consent-sdk");
  }

  get acceptButton() {
    return $("#onetrust-accept-btn-handler");
  }

  get settingsButton() {
    return $("#onetrust-pc-btn-handler");
  }

  get acceptAllButton() {
    return $("#accept-recommended-btn-handler");
  }

  get performanceCookiesToggle() {
    // return $('#ot-group-id-2')
    return $(
      "#ot-pc-content > section > div:nth-child(3) > div.ot-acc-hdr > div.ot-tgl > label > span.ot-switch-nob"
    );
  }

  get functionalCookiesToggle() {
    // return $('#ot-group-id-3')
    return $(
      "#ot-pc-content > section > div:nth-child(4) > div.ot-acc-hdr > div.ot-tgl > label > span.ot-switch-nob"
    );
  }

  get advertisingCookiesToggle() {
    // return $('#ot-group-id-4')
    return $(
      "#ot-pc-content > section > div:nth-child(5) > div.ot-acc-hdr > div.ot-tgl > label > span.ot-switch-nob"
    );
  }

  get statisticsCookiesToggle() {
    return $("#ot-group-id-9");
  }
}

module.exports = new CookieModal();
