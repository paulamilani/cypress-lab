describe('checkboxes', () => {
  
    beforeEach(() => {
      cy.visit('/checkboxes')
  
    })
  
    it('checkbox one not checkd', () => {
        cy.get('input[type="checkbox"]').check('checkbox 1')
        cy.get('checkbox').should('be.checked')
      
    })
  
    it('checkbox two checked', () =>{
        cy.get('input[type="checkbox"]').click('checkbox 2')
        cy.get('checkbox').should('not.be.checked')
      
    })
  
  })