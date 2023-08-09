import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["disable", "reset"];
  connect() {
    console.log(this.disableTarget);
    console.log(this.resetTarget);
  }

  disable() {
    this.disableTarget.innerText = "Bingo!";
    this.disableTarget.disabled = true;
    this.resetTarget.classList.remove("d-none");
  }

  reset() {
    this.disableTarget.innerText = "Click me!";
    this.disableTarget.disabled = false;
    this.resetTarget.classList.add("d-none");
  }
}
