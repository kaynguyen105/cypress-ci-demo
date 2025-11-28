/* ==== Test Created with Cypress Studio ==== */
it('adding item', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://material.playwrightvn.com/02-xpath-product-page.html');
  cy.get(':nth-child(1) > .product-info > .add-to-cart').click();
  cy.get(':nth-child(2) > .product-info > .add-to-cart').click();
  cy.get(':nth-child(3) > .product-info > .add-to-cart').click();
  cy.get(':nth-child(1) > .product-info > .add-to-cart').click();
  /* ==== End Cypress Studio ==== */
});