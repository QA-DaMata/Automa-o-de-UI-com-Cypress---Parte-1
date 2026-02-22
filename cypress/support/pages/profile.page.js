/// <reference types="cypress" />

export const ProfilePage = {
    customerName: () => { return cy.get('[data-testid="CustomerName"]') }
    
}