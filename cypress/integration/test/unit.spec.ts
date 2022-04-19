/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('e2e test', () => {
  before(() => {
    cy.visit('/');
  });

  it('test init', () => {
    cy.get('h1').contains('init');
  });
  it('test click', () => {
    cy.get('[data-test-id=test-btn]').click();
    cy.get('h1').contains('click');
  });
  it('test input', () => {
    cy.get('[data-test-id=test-input]').type('input');
    cy.get('h1').contains('input');
  });
});
