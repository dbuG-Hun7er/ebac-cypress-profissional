export class LoginPage {
  visit() {
    cy.setCookie("ebacStoreVersion", "v2");
    cy.visit("/");
  }

  openAccountTab() {
    cy.get('[href="/Tab/Account"]').click();
  }

  emailInput() {
    return cy.get('[data-testid="email"]');
  }

  passwordInput() {
    return cy.get('[data-testid="password"]');
  }

  loginButton() {
    return cy.get('[data-testid="btnLogin"]');
  }

  login(email, senha) {
    this.visit();
    this.openAccountTab();
    this.emailInput().should("be.visible").type(email);
    this.passwordInput().type(senha, { log: false });
    this.loginButton().click();
  }
}
