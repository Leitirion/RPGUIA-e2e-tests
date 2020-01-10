/// <reference types="Cypress" />

describe('Smokes', function () {
  it('site should have title', function () {
    cy.visit(Cypress.env('URL')).title().should('eq', "My react playground")
  })
})