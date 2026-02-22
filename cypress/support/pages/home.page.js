/// <reference types="cypress"/>

export const HomePage = {
    openMenu(menu){
        const profire = `[href="/Tab/${menu}"]`
        return cy.get(profire).click()
    }
}