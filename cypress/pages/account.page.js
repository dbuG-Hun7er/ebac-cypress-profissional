export class AccountPage {

  visit() {
    cy.visit("/minha-conta");
  }

  // campo email register
  emailRegister() {
    return cy.get('input[name="email"]');
  }

  // campo senha register
  passwordRegister() {
    return cy.get('input[name="password"]').eq(1);
  }

  // botão register
  submitRegister() {
    return cy.get('[name="register"]');
  }
}

