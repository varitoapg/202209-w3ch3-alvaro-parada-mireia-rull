import Component from "../Component.js";
import type MainSeriesStructure from "./types.js";

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
