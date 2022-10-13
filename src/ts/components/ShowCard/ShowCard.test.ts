import ShowCard from "./ShowCard";

describe("Given an instance of ShowCard component", () => {
  describe("When it's rendered with a TvShow", () => {
    test("Then it should show the TVShow card on the screen", () => {
      const screen = document.createElement("div");
      const tvShow = {
        id: 1,
        name: "The Sopranos",
        creator: "David Chase",
        year: 1999,
        poster:
          "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        watched: true,
        score: 5,
        emmies: 21,
      };

      const seriesCard = new ShowCard(screen, tvShow);
      seriesCard.render();

      expect(seriesCard.domElement).not.toBeNull();
    });
  });
});
