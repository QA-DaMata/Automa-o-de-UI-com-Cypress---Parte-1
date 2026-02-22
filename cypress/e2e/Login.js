/// <reference types='cypress'/>
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const { ProfilePage } = require('../support/pages/profile.page')

Given('que estou na página inicial', () => {
  cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' }) //Para setar cookies na aplicação
  cy.visit('/')
})

When('eu faço o login com o usuario {string} e a senha {string}', (email, senha) => {
  cy.login(email, senha)
});

Then('o nome do usuário deve aparecer na pagina de perfil', () => {
  ProfilePage.customerName().should('contain', 'EBAC Cliente')
})



