/// <reference types="cypress" />
describe('Testing network intercept', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.intercept('/Product/List').as('getProducts');
        cy.contains('Product').click();
    });
    it('Check network intercept', () => {
        cy.wait('@getProducts').then((req) => {
            expect(req.response.statusCode).to.eq(200);
            expect(req.response.body.length).to.be.greaterThan(0);
        });
    });
});
