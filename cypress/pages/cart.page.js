export class CartPage {

  validarCarrinho() {
    cy.url().should("include", "/carrinho");
    cy.contains("Total no carrinho").should("be.visible");
  }

  proceedToCheckout() {
    cy.get(".checkout-button").click();
  }

}
