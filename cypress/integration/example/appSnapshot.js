describe("Home screenshot", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });
  it("should take a screenshot of the home page", () => {
    cy.matchImageSnapshot("app");
  });
});
