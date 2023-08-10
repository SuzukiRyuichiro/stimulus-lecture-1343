import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["input", "results"];
  static values = {
    url: String,
    id: Number,
  };
  connect() {
    console.log(this.inputTarget);
    console.log(this.resultsTarget);
    console.log(this.urlValue);
    console.log(this.idValue);
  }

  search(event) {
    event.preventDefault();
    // reset the results section
    this.resultsTarget.innerHTML = "";
    // make the API call
    this.fetchMovies(this.inputTarget.value);
  }

  fetchMovies(query) {
    const url = `${this.urlValue}/?i=tt3896198&apikey=2b73eb94&s=${query}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.insertMovies(data));
  }

  insertMovies(data) {
    // an array of movie objects attached to the key Search
    data.Search.forEach((result) => {
      const movieTag = `<li class="list-group-item border-0">
                          <img src="${result.Poster}" alt="" width="100" height="100%">
                        </li>`;
      this.resultsTarget.insertAdjacentHTML("beforeend", movieTag);
    });
  }
}
