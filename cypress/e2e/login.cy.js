describe('login', () => {
  
  beforeEach(() => {
    cy.visit('/login')

  })

  it('login com sucesso', () => {
    cy.login(Cypress.env('user'), Cypress.env('pass'))
    cy.get('h2').should('have.text', ' Secure Area')
  })

  it('login sem sucesso', () =>{
    cy.login(Cypress.env('userIncorrect'), Cypress.env('pass'))
    cy.get('h2').should('not.have.text', 'Secure Area')
  })

})