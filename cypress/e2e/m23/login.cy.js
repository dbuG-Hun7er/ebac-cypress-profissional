describe('M23 - Login', () => {
  it('deve logar com sucesso (sem validar rota)', () => {
    cy.intercept('POST', '**/public/authUser*').as('authUser')

    cy.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')

    // valida que a API de login respondeu 200
    cy.wait('@authUser')
      .its('response.statusCode')
      .should('eq', 200)

    
    cy.get('[href="/Tab/Browse"]').should('be.visible')
  })
})