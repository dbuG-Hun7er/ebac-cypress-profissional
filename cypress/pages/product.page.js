export class ProductPage {

  visitProduct() {
    cy.visit("/product/abominable-hoodie/");
    cy.get(".product_title").should("be.visible");
  }

  selectSize(size) {
    cy.get(`.button-variable-item-${size}`).click();
  }

  selectColor(color) {
    cy.get(`.button-variable-item-${color}`).click();
  }

  increaseQty(times = 1) {
    for (let i = 0; i < times; i++) {
      cy.get(".plus").click();
    }
  }

  addToCart() {
    cy.get(".single_add_to_cart_button").click();
    cy.contains("foram adicionados no seu carrinho").should("be.visible");
  }

  goToCart() {
    cy.contains("Ver carrinho").click();
  }

}
