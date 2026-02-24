describe('M23 - Carrinho com Intercept', () => {
  beforeEach(() => {
    cy.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
  })

  it('deve validar fluxo de carrinho com intercept (até botão Add To Cart)', () => {
    cy.intercept('GET', '**/public/getCart*', {
      statusCode: 200,
      body: {
        success: true,
        cart: { items: [] }
      }
    }).as('getCart')

    cy.intercept('PUT', '**/public/updateCart*', {
      statusCode: 200,
      body: { success: true }
    }).as('updateCart')

    // ir para browse
    cy.get('[href="/Tab/Browse"]').click()

  
    cy.get('[data-testid="browse-product-list"]').scrollTo('bottom')

    cy.get('[data-testid="productDetails"]')
      .should('have.length.greaterThan', 0)
      .last()
      .click()

   
    cy.get('[data-testid="addToCart"]')
      .scrollIntoView()
      .should('be.visible')
      .and('contain.text', 'Add To Cart')
  })

  it('deve remover item do carrinho', () => {
    cy.intercept('GET', '**/public/getCart*', {
      statusCode: 200,
      body: {
        success: true,
        cart: {
          items: [
            {
              productId: 'fake-1',
              name: 'Tênis Esportivo',
              price: 150,
              quantity: 1
            }
          ]
        }
      }
    }).as('getCartComItem')

    cy.intercept('PUT', '**/public/updateCart*', {
      statusCode: 200,
      body: { success: true }
    }).as('updateCart')

    cy.visit('/Tab/Cart')
    cy.wait('@getCartComItem')

    cy.get('[data-testid="removeItem"]').should('be.visible').click({ force: true })
    cy.wait('@updateCart')
  })
})