import { Controller } from "stimulus";

// Create and bind a dedicated Stimulus controller
// Define the `targets`
// Define the `actions` to listen to events
// Make an API call to our OMDBApi & fetch the data
// Insert the data into the DOM

export default class extends Controller {
  static targets = ["input", "results"];

  connect() {
    console.log("movies controller connected");
  }

  search(event) {
    console.log(this.inputTarget);
    event.preventDefault();
    fetch(
      `http://www.omdbapi.com/?s=${this.inputTarget.value}&i=tt3896198&apikey=2b73eb94`
    )
      .then((response) => response.json())
      .then((data) => {
        data.Search.forEach((result) => {
          const movieTag = `<li class="list-group-item border-0">
        <img src="${result.Poster}" alt="" width="100" height="100%">
      </li>`;
          this.resultsTarget.insertAdjacentHTML("beforeend", movieTag);
        });
      });
  }
}
