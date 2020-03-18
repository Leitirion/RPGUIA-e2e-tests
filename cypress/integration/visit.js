/// <reference types="Cypress" />
describe('visit', function () {
  it('site should have title', function () {
    cy.visit(Cypress.env('URL')).title().should('eq', "Welcome to RPGUIA!")
  })
})