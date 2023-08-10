import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["button", "link"];

  connect() {
    // console.log("Hello from our first Stimulus controller");
    // console.log(this.buttonTarget);
    // console.log(this.linkTarget);
  }

  disable() {
    // this.element refers to the element which controller is mounted on
    // remove the btn-primary class
    this.buttonTarget.classList.remove("btn-primary");
    // add the btn-danger class
    this.buttonTarget.classList.add("btn-danger");
    // change the text to bingo!
    this.buttonTarget.innerText = "Bingo!";
    // disable the button
    this.buttonTarget.disabled = true;

    this.linkTarget.classList.remove("d-none");
  }

  reset() {
    // make the reset dissapear
    this.linkTarget.classList.add("d-none");
    // add the primary class to button
    this.buttonTarget.classList.add("btn-primary");
    // remove the danger class from the button
    this.buttonTarget.classList.remove("btn-danger");
    // change the text
    this.buttonTarget.innerText = "Click me!";
    // enable the button
    this.buttonTarget.disabled = false;
  }
}
