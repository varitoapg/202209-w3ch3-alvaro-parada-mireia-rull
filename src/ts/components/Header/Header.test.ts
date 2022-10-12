import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered with a title ", () => {
    test("Then it should show a section with a Title h1 ", () => {
      const screen = document.createElement("div");
      const title = "Title";

      const paragraphComponent = new Header(screen, title, "", "header");
      paragraphComponent.render();
      const expectedHeaderOne = screen.querySelector("h1");
      const expectedSection = screen.querySelector("header");

      expect(expectedHeaderOne).not.toBeNull();
      expect(expectedSection).not.toBeNull();
    });
  });
});
