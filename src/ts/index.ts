import Component from "./components/Component.js";
import Header from "./components/Header/Header.js";

const rootElement = document.querySelector(".root");

const container = new Component(rootElement as HTMLElement, "container", "div");
container.render();
const header = new Header(
  container.domElement,
  "Series List",
  "main-header",
  "header"
);
header.render();
