describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });
});


describe("template spec", () => {
  it("fetches data from API", () => {
    cy.server(); // start a server to handle mocked requests
    cy.route({
      method: "GET",
      url: "https://technocy.pythonanywhere.com/",
      response: {
        // mock data to be returned by the API
        data: [
          {
            id: 1,
            name: "item 1",
          },
          {
            id: 2,
            name: "item 2",
          },
        ],
      },
    });

    cy.visit("http://localhost:3000"); // visit the app's URL

    cy.wait("@getData"); // wait for the API request to complete
    cy.get(".item").should("have.length", 2); // assert that the data is displayed on the page
  });
});
