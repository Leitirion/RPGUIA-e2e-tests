

it('visit URL, type email and password, login', function () {
    cy.visit(Cypress.env('URL'));
    cy.get('[placeholder="Email address"]').type("123");
    cy.get('[placeholder="Password"]').type("123");
    cy.get('button[class="ui blue large fluid button"]').click({ force: true });
})