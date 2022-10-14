import shows from "../../shows/shows.js";
import type TvShow from "../../shows/types.js";
import Component from "../Component.js";

import type Show from "../Show/Show.js";

class ShowCard extends Component {
  constructor(parentElement: HTMLElement, private readonly show: TvShow) {
    super(parentElement, "serie", "li");
  }

  render() {
    super.render();
    let rating = ``;
    for (let i = 0; i < this.show.score; i++) {
      rating += `<li class="score__star">
        <i class="icon--score fas fa-star" title="${i + 1}/5"></i>
      </li>`;
    }

    let unmarkedRating = ``;
    for (let i = 0; i < 5 - this.show.score; i++) {
      unmarkedRating += `<li class="score__star">
        <i class="icon--score far fa-star" ></i>
      </li>`;
    }

    this.domElement.innerHTML = `
    <img class="serie__poster"
      src="${this.show.poster}"
      alt="${this.show.name} poster" />
    <h4 class="serie__title">${this.show.name}</h4>
    <p class="serie__info">${this.show.creator} (${this.show.year})</p>
    <ul class="score">
      ${rating}
      ${unmarkedRating}
      </ul>
    <i class="fas fa-times-circle icon--delete"></i>`;
  }

  delete() {
    // This.domElement.addEventListener("click", () => {
    //   shows
    //     .filter((series) => series.id !== this.show.id)
    //     .forEach(
    //       (series:shows, position: number) => series[position] = series[position]);
    // };
  }
}

export default ShowCard;
