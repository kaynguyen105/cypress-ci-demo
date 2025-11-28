describe("Udemy Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8000/Product/List");
    });
    it("Click edit for specific product",()=>{
        cy.get('.table')
        .find('td')
        .contains('Mouse')
        .parent()
        .contains('Edit')
                .click();   
        cy.get('#Names').should('have.value','Mouse'); 
        cy.get('#Description').parent().should('have.class','form-group');
        cy.url().should('include','/Product/Edit/');
        cy.get('#Description').invoke('val').should('contain','Gaming Mouse');

        cy.get('#Description').as('desc');
        cy.get('@desc').then(($desc) => {
            cy.wrap($desc.val()).should('contain', 'Gaming Mouse');
        });
            });
        });