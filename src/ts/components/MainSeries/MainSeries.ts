import Component from "../Component.js";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import MainSeriesStructure from "./types.js";

class MainSeries extends Component implements MainSeriesStructure {
  constructor(
    parentElement: HTMLElement,
    public sectionTitle: string,
    className = "",
    tag = ""
  ) {
    super(parentElement, "series", "section");
    this.sectionTitle = sectionTitle;
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <h2 class = "section-title">${this.sectionTitle}</h2>`;
  }
}

export default MainSeries;
