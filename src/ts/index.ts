import Component from "./components/Component.js";
import Header from "./components/Header/Header.js";
// Import MainSeries from "./components/MainSeries/MainSeries.js";
import SeriesList from "./components/SeriesList/SeriesList.js";

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

const seriesPending = new SeriesList(
  sectionSeries.domElement,
  "Pending Series",
  "You have 4 series pending to watch"
);
seriesPending.render();

const seriesWatched = new SeriesList(
  sectionSeries.domElement,
  "Watched series",
  "You have watched 4 series"
);
seriesWatched.render();
