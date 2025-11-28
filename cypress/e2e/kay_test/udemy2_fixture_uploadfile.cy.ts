/// <reference types="cypress" />
describe('EA application test from Online', () => {

    beforeEach(() => {

        // // Ignore application errors
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('https://www.iloveimg.com/photo-editor');
    });

    it('Login Test', () => {
        cy.get('#pickfiles').should('be.visible').click();

            cy.contains('Employee Details').should('be.visible');
        });
    });
