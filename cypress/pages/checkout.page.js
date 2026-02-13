// Page Object - Checkout
// Responsável por preencher dados do usuário
// finalizar compra e validar pedido criado


export class CheckoutPage {

  validarCheckout() {
    cy.url().should("include", "/checkout");
    cy.contains("Detalhes de faturamento").should("be.visible");
  }

  preencherNome(nome) {
    cy.get('[name="billing_first_name"]').clear().type(nome);
  }

  preencherSobrenome(sobrenome) {
    cy.get('[name="billing_last_name"]').clear().type(sobrenome);
  }

  preencherEndereco(endereco) {
    cy.get('[name="billing_address_1"]').clear().type(endereco);
  }

  preencherCidade(cidade) {
    cy.get('[name="billing_city"]').clear().type(cidade);
  }

  preencherCEP(cep) {
    cy.get('[name="billing_postcode"]').clear().type(cep);
  }

  preencherTelefone(tel) {
    cy.get('[name="billing_phone"]').clear().type(tel);
  }

  preencherEmail(email) {
  cy.get('[name="billing_email"]').clear().type(email);
}


  selecionarEstado(estado = "São Paulo") {
    cy.get('#select2-billing_state-container').click();
    cy.get('.select2-search__field').type(`${estado}{enter}`);
  }

  aceitarTermos() {
    cy.get('#terms').check({ force: true });
  }

  finalizarCompra() {
    cy.get('[name="woocommerce_checkout_place_order"]').click();
  }

  validarPedidoCriado() {
    
    cy.url().should("include", "/checkout/order-received/");
    cy.contains(/pedido recebido|order received/i).should("be.visible");
  }

  preencherCheckoutCompleto(dados) {
    this.preencherNome(dados.nome);
    this.preencherSobrenome(dados.sobrenome);
    this.preencherEndereco(dados.endereco);
    this.preencherCidade(dados.cidade);
    this.selecionarEstado(dados.estado || "São Paulo");
    this.preencherCEP(dados.cep);
    this.preencherTelefone(dados.telefone);
    this.preencherEmail(dados.email);


    this.aceitarTermos();
    this.finalizarCompra();
    this.validarPedidoCriado();
  }
}
