Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Icaro')
    cy.get('#lastName').type('Rodrigues')
    cy.get('#email').type('icaro@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})