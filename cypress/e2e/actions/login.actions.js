export function doLogin(email, senha) {
  cy.setCookie("ebacStoreVersion", "v2");

  cy.visit("/");

  // abre a área de conta / profile (leva pra tela com email/password)
  cy.get('[href="/Tab/Account"]').click();

  cy.get('[data-testid="email"]').should("be.visible").type(email);
  cy.get('[data-testid="password"]').type(senha, { log: false });
  cy.get('[data-testid="btnLogin"]').click();
}