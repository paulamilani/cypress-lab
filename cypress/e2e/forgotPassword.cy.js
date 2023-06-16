describe('forgot_password', () => {
  
    beforeEach(() => {
      cy.visit('/forgot_password')
  
    })
  
    it('forgot password send email', () => {
        cy.get('[name="email"]').type('emai@email.com')
        cy.contains('button', 'Retrieve password').click()
        cy.get('h1').should('have.text', 'Internal Server Error')
      
    })
  
  })