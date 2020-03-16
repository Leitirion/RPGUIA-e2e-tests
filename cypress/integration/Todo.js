it('visit URL, type email and password, sign in, add todo, del todo and logout', function () {
    cy.visit(Cypress.env('URL'));
    cy.get('[id="email"]').click({ force: true }).type('123@gmail.com', { force: true });
    cy.get('[id="password"]').click({ force: true }).type('123456', { force: true });
    cy.get('button[id="signin"]').click();
    cy.wait(1000);
    cy.get('[id="todo"]').click({ force: true }).type(`My_test_todo{enter}`);
    cy.get('li[class="todo list-group-item"]').get('span[id="item_text"]').first().should('have.text', "My_test_todo");
    cy.get('[id="del_button"]').first().click({ force: true });
    cy.get('li[class="todo list-group-item"]').get('span[id="item_text"]').first().should('have.text', "A new todo name");
    cy.get('[id="logout"]').click();
    cy.wait(1000);
    cy.visit(Cypress.env('URL')).title().should('eq', "Welcome to RPGUIA!");
})