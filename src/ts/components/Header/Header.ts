import Component from "../Component.js";

class Header extends Component implements HeaderStructure {
  constructor(
    parentElement: HTMLElement,
    public mainTitle: string,
    className = "",
    tag = "div"
  ) {
    super(parentElement, "main-header", "header");
    this.mainTitle = mainTitle;
  }

  render() {
    super.render();
    this.domElement.innerHTML = `
    <h1 class="main-title">${this.mainTitle}</h1>`;
  }
}

export default Header;
