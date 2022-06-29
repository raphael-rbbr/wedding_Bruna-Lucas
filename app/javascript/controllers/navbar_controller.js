import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  updateNavbar() {
    if (window.scrollY)  {
      this.element.classList.add("nav.navbar-opaco")
    } else {
      this.element.classList.remove("nav.navbar-opaco")
    }
  };
}
