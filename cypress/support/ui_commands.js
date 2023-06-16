Cypress.Commands.add('login', (user, pass) => {
    cy.get('[name="username"]').type(user);
    cy.get('[name="password"]').type(pass);
    cy.contains('button', 'Login').click();
})