describe("Item managemetn", () => {
    beforeEach(() => {
      cy.visit("https://material.playwrightvn.com/02-xpath-product-page.html");
    });
  
    it("Should add items successfully", () => {
      cy.get('[data-product-id="2"]').click();
      cy.get('[data-product-id="1"]').click();
      cy.get('[data-product-id="3"]').click();
    });
  });
  