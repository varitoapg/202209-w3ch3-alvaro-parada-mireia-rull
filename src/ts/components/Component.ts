import type ComponentStructure from "./types.js";

class Component implements ComponentStructure {
  domElement: HTMLElement;

  constructor(
    private readonly parentElement: HTMLElement,
    private readonly className = "",
    tag = "div"
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render() {
    this.parentElement.appendChild(this.domElement);
  }
}

export default Component;
