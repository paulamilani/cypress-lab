describe('upload', () => {
  
    beforeEach(() => {
      cy.visit('/upload')
  
    })
  
    it('upload file', () => {
        cy.get('#drag-drop-upload').selectFile('cypress/fixtures/picture.png', {
            action: 'drag-drop',
          })
        cy.get('#file-submit').click()
        cy.get('h1').should('have.text', 'Internal Server Error')
      
    })
  
  })