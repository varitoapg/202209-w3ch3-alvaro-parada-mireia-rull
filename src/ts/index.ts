import Component from "./components/Component.js";
import Header from "./components/Header/Header.js";
import MainSeries from "./components/MainSeries/MainSeries.js";
import SeriesList from "./components/SeriesList/SeriesList.js";
import ShowCard from "./components/ShowCard/ShowCard.js";
import shows from "./shows/shows.js";

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
  "You have 4 series pending to watch",
  "series-pending"
);
seriesPending.render();

const seriesWatched = new SeriesList(
  sectionSeries.domElement,
  "Watched series",
  "You have watched 4 series",
  "series-watched"
);
seriesWatched.render();

shows.forEach((show) => {
  new ShowCard(seriesPending.domElement, show).render();
});
