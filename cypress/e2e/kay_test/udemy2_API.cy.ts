/// <reference types="cypress" />

import { method } from "cypress/types/bluebird";

describe('Testing API', () => {
    it('Get method', () => {
        cy.request('GET', 'http://localhost:8001/Product/GetProductById/1')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', 'Keyboard');
                expect(response.body).to.have.property('description', 'Gaming Keyboard with lights');
            });
    });

    // post method
    it('Post method', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8001/Product/Create',
            failOnStatusCode: false,
            headers:{
                'accept': 'text/plain',
            },
            body: {
                "id": 190,
                "name": "CPU",
                "description": "CPU for gaming PC",
                "price": 150,
                "productType": "CPU"
              },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', 'CPU');
            expect(response.body).to.have.property('description', 'CPU for gaming PC');
        });
    });
});
