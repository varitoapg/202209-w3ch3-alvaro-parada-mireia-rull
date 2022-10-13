import SeriesList from "./SeriesList";

describe("Given a SeriesList component", () => {
  describe("When it's rendered with a title and information", () => {
    test("Then it should show a section with a Title as h3 and 'patatas fritas' as a p on the screen", () => {
      const screen = document.createElement("div");
      const title = "Title";
      const information = "patatas fritas";
      const expectedInformation = "patatas fritas";

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
      expect(expectedParagraph.textContent).toBe(expectedInformation);
      expect(expectedHeaderThree).not.toBeNull();
      expect(expectedHeaderThree.textContent).toBe(title);
      expect(expectedSection).not.toBeNull();
    });
  });
});
