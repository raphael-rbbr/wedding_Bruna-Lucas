import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  updateNavbar() {
    if (window.scrollY >= window.scrollTop() >= 5)  {
      this.element.classList.add("nav.navbar-opaco")
    } else {
      this.element.classList.remove("nav.navbar-opaco")
    }
  };
}
