import Component from "./components/Component.js";
import Header from "./components/Header/Header.js";
import MainSeries from "./components/MainSeries/MainSeries.js";
import SeriesList from "./components/SeriesList/SeriesList.js";
import type Show from "./components/Show/Show.js";
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

const showsCount = shows.length;
const watchedShowsCount = shows.filter((show) => show.watched).length;

let showCountInformationPending;
if (showsCount === watchedShowsCount) {
  showCountInformationPending = "Congrats! You've watched all your series";
} else {
  showCountInformationPending = `You have ${
    showsCount - watchedShowsCount
  } series pending to watch`;
}

const seriesPending = new SeriesList(
  sectionSeries.domElement,
  "Pending Series",
  showCountInformationPending,
  "series-pending"
);
seriesPending.render();

const pendingSeriesList = new Component(
  seriesPending.domElement,
  "series-list",
  "ul"
);
pendingSeriesList.render();

let showCountInformationWatched;
if (watchedShowsCount === 0) {
  showCountInformationWatched = "You have not watched any series yet";
} else {
  showCountInformationWatched = `You have watched ${watchedShowsCount} series`;
}

const seriesWatched = new SeriesList(
  sectionSeries.domElement,
  "Watched series",
  showCountInformationWatched,
  "series-watched"
);
seriesWatched.render();

const watchedSeriesList = new Component(
  seriesWatched.domElement,
  "series-list",
  "ul"
);
watchedSeriesList.render();

shows.forEach((show: Show) => {
  if (show.watched) {
    const newShow = new ShowCard(watchedSeriesList.domElement, show);
    newShow.render();
  } else {
    const newShow = new ShowCard(pendingSeriesList.domElement, show);
    newShow.render();
  }
});
