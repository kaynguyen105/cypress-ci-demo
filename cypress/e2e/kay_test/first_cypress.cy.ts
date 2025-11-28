describe("Login tests", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/");
    });
  
    it("Should log in and display the Products page", () => {
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('.title').should('have.text', 'Products');
    });
  });
  