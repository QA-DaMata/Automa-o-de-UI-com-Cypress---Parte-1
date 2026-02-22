const {email, senha} = require('../fixtures/data.json')
const { ProfilePage } = require('../support/pages/profile.page')
describe('Teste de autenticação', () => {

  it('Deve fazer o login com sucesso', () => {
    cy.login(email, senha)
    ProfilePage.customerName().should('contain', 'EBAC Cliente')
  })
})