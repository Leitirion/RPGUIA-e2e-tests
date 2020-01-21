

it('visit URL, type email and password, sign in, logout', function () {
    cy.visit(Cypress.env('URL'));
    cy.get('[id="email"]').click({ force: true }).type('123@gmail.com', { force: true });
    cy.get('[id="password"]').click({ force: true }).type('123456', { force: true });
    cy.get('button[id="signin"]').click();
    cy.wait(1000);
    cy.get('.title_for_homepage').should('have.text', "Hello to your login page!");
    cy.get('[id="logout"]').click();
    cy.wait(1000);


    cy.visit(Cypress.env('URL')).title().should('eq', "Welcome to RPGUIA!")
})