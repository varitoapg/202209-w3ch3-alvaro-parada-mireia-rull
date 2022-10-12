import Component from "../Component.js";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import Show from "../Show/show.js";

class ShowCard extends Component {
  constructor(parentElement: HTMLElement, public show: Show) {
    super(parentElement, "serie", "li");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `<img class="serie__poster"
                src="${this.show.poster}"
                alt="${this.show.name} poster" />
              <h4 class="serie__title">The Sopranos</h4>
              <p class="serie__info">David Chase (1999)</p>
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
