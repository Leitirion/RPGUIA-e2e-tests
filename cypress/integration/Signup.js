it('visit URL, type email and password, signup, logout', function () {
    cy.visit(Cypress.env('URL'));
    cy.get('[id="signup"]').click({ force: true });
    cy.get('[id="email"]').click().type(userID_Alpha_Numeric());
    function userID_Alpha_Numeric() {

        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var text = "@gmail.com";
        for (var i = 0; i < 10; i++)
            text = possible.charAt(Math.floor(Math.random() * possible.length)) + text;

        return text;
    }
    cy.get('[id="password"]').click().type('123456');
    cy.get('[id="reg_button"]').click({ force: true });
    cy.get('[id="back_button"]').click({ force: true });
    cy.wait(1000);
    cy.get('.title_for_homepage').should('have.text', "Hello ");
    cy.get('[id="logout"]').click();
    cy.wait(1000);
    cy.visit(Cypress.env('URL')).title().should('eq', "Welcome to RPGUIA!")
})