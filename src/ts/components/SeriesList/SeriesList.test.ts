import SeriesList from "./SeriesList";

describe("Given a SeriesList component", () => {
  describe("When it's rendered with a title and information", () => {
    test("Then it should show a section with a Title h3 and information p on the screen", () => {
      const screen = document.createElement("div");
      const title = "Title";
      const information = "p";

      const paragraphComponent = new SeriesList(
        screen,
        title,
        information,
        "",
        "section"
      );
      paragraphComponent.render();
      const expectedParagraph = screen.querySelector("p");
      const expectedHeaderThree = screen.querySelector("h3");
      const expectedSection = screen.querySelector("section");

      expect(expectedParagraph).not.toBeNull();
      expect(expectedHeaderThree).not.toBeNull();
      expect(expectedSection).not.toBeNull();
    });
  });
});
