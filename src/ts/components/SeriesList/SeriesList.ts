import Component from "../Component.js";

class SeriesList extends Component implements SeriesList {
  constructor(
    parentElement: HTMLElement,
    public subsectionTitle: string,
    public information: string,
    className = "",
    tag = "div"
  ) {
    super(parentElement, className, tag);
    this.subsectionTitle = subsectionTitle;
    this.information = information;
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <h3 class = "subsection-title">${this.subsectionTitle}</h3>
    <p class = "info">${this.information}</p>`;
  }
}

export default SeriesList;
