import type TvShow from "../../shows/types.js";
import Component from "../Component.js";

import Show from "../Show/Show.js";

class ShowCard extends Component {
  constructor(parentElement: HTMLElement, private readonly show: TvShow) {
    super(parentElement, "serie", "li");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <img class="serie__poster"
      src="${this.show.poster}"
      alt="${this.show.name} poster" />
    <h4 class="serie__title">${this.show.name}</h4>
    <p class="serie__info">${this.show.creator} (${this.show.year})</p>
    <ul class="score">
      <li class="score__star">
        <i class="icon--score fas fa-star" title="1/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="2/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="3/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="4/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="5/5"></i>
      </li>
    </ul>
    <i class="fas fa-times-circle icon--delete"></i>`;
  }
}

export default ShowCard;
