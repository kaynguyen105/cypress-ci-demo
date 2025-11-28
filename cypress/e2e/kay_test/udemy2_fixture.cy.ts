/// <reference types="cypress" />
describe('EA application test from Online', () => {

    beforeEach(() => {

        // // Ignore application errors
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://eaapp.somee.com/');
    });

    it('Login Test', () => {
        cy.get('#loginLink').should('be.visible').click();

        cy.fixture('login').then(login => {
            cy.get('#UserName').type(login.name);
            cy.get('#Password').type(login.password);
            cy.get('#loginIn').click();

            cy.contains('Employee Details').should('be.visible');
        });
    });
});
