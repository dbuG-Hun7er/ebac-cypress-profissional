// =============================================
// M22 - Checkout Flow (App Actions)
// Fluxo completo de compra como usuário guest
// Valida:
// - seleção de produto
// - carrinho
// - preenchimento checkout
// - aceite termos
// - finalização do pedido
// - validação "pedido recebido"
// =============================================

import { doCheckout } from "../actions/checkout.actions";


describe("M22 - Checkout (App Actions)", () => {
  it("deve realizar o fluxo até o checkout e preencher dados", () => {
    cy.fixture("address").then((dados) => {
      doCheckout(dados);
    });
  });
});
