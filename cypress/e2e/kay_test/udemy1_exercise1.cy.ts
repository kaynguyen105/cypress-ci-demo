describe("Udemy Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8000/Product/List");
    });
    it("Click all row in the table",()=>{
        cy.get('.table')
        .find('td')
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