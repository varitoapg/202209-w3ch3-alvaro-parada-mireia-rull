import Component from "./components/Component.js";
import Header from "./components/Header/Header.js";
import MainSeries from "./components/MainSeries/MainSeries.js";

const rootElement = document.querySelector(".root");

const container = new Component(rootElement as HTMLElement, "container", "div");
container.render();

const header = new Header(
  container.domElement,
  "My Series",
  "main-header",
  "header"
);
header.render();

const main = new Component(container.domElement, "main", "main");
main.render();

const sectionSeries = new MainSeries(
  main.domElement,
  "Series List",
  "series",
  "section"
);
sectionSeries.render();
