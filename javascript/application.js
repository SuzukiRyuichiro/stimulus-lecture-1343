import { Application, Controller } from "stimulus";
import DisableButtonController from "./controllers/disable_button_controller.js";
import MoviesController from "./controllers/movies_controller.js";
window.Stimulus = Application.start();
Stimulus.register("disable-button", DisableButtonController);
Stimulus.register("movies", MoviesController);

// const button = document.querySelector("#click-me");

// button.addEventListener("click", () => {
//   // remove the btn-primary class
//   button.classList.remove("btn-primary");
//   // add the btn-danger class
//   button.classList.add("btn-danger");
//   // change the text to bingo!
//   button.innerText = "Bingo!";
//   // disable the button
//   button.disabled = true;
// });
