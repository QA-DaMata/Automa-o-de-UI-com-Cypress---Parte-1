const { HomePage } = require("../support/pages/home.page")
const loginPage = require("../support/pages/login.page")
const {email, senha} = require('../fixtures/data.json')
const { ProfilePage } = require("../support/pages/profile.page")


describe('Teste de autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' }) //Para setar cookies na aplicação
    cy.visit('/')
  })

  it('Deve fazer o login com sucesso', () => {
    HomePage.openMenu('Account')
    loginPage.login(email, senha)
    HomePage.openMenu('Account')
    ProfilePage.customerName().should('contain', 'EBAC Cliente')
  })
})