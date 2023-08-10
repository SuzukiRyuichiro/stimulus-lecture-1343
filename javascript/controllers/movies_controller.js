import { Controller } from "stimulus";

// Create and bind a dedicated Stimulus controller
// Define the `targets`
// Define the `actions` to listen to events
// Make an API call to our OMDBApi & fetch the data
// Insert the data into the DOM

export default class extends Controller {
  static targets = ["input", "results"];
  static values = { baseUrl: String };

  connect() {
    console.log("movies controller connected");
    console.log(this.baseUrlValue);
  }

  fetchMovies(query) {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
      .then((response) => response.json())
      .then((data) => this.insertMovies(data));
  }

  insertMovies(data) {
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-group-item border-0">
      <img src="${result.Poster}" alt="" width="100" height="100%">
    </li>`;
      this.resultsTarget.insertAdjacentHTML("beforeend", movieTag);
    });
  }

  search(event) {
    event.preventDefault();
    this.resultsTarget.innerHTML = "";
    this.fetchMovies(this.inputTarget.value);
  }
}
