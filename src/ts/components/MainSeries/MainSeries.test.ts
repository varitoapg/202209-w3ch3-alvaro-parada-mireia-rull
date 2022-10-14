import MainSeries from "./MainSeries";

describe("Given a SeriesList component", () => {
  describe("When it's rendered with a title", () => {
    test("Then it should show a section with a Title h2", () => {
      const screen = document.createElement("div");
      const title = "Title";

      const paragraphComponent = new MainSeries(screen, title, "", "section");
      paragraphComponent.render();
      const expectedHeaderTwo = screen.querySelector("h2");
      const expectedSection = screen.querySelector("section");

      expect(expectedHeaderTwo).not.toBeNull();
      expect(expectedSection).not.toBeNull();
      expect(expectedHeaderTwo.textContent).toBe(title);
    });
  });
});
