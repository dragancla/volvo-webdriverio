class Navbar {
  get header() {
    return '[id="sitenav:topbar"]';
  }

  get menuButton() {
    return $('[id="sitenav-sidenav-toggle"]');
  }

  get menuDrawer() {
    return $('[data-autoid="nav:sideNavigationDraw"]');
  }

  get buyButton() {
    return $("[aria-controls=links-menu0-content]");
  }

  get ownButton() {
    return $("[aria-controls=links-menu1-content]");
  }

  get aboutButton() {
    return $("[aria-controls=links-menu2-content]");
  }

  get exploreButton() {
    return $("[aria-controls=links-menu3-content]");
  }

  get moreButton() {
    return $("[aria-controls=links-menu4-content]");
  }

  get menuCloseButton() {
    return $('[data-autoid="nav:siteNavCloseIcon"]');
  }

  get carsButton() {
    return $('[data-autoid="nav:topNavCarMenu"]');
  }

  get carsDrawer() {
    return $('[data-autoid="nav:carMenuDesktop"]');
  }

  get electricCategory() {
    return $("[aria-controls=site-nav-cars-menu-section-panel-0]");
  }

  get hibridCategory() {
    return $("[aria-controls=site-nav-cars-menu-section-panel-1]");
  }

  get mildCategory() {
    return $("[aria-controls=site-nav-cars-menu-section-panel-2]");
  }

  get carsCloseButton() {
    return $('[data-autoid="nav:carMenuCloseIcon"]');
  }

  get navBackdrop() {
    return $('[id="Sitenav-backdrop"]');
  }
}

module.exports = new Navbar();
