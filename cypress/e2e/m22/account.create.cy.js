import { AccountPage } from "../../pages/account.page";

describe("M22 - Criação de conta (Page Objects)", () => {

  it("deve criar conta com sucesso", () => {

    const page = new AccountPage();

    const email = `lucas${Date.now()}@teste.com`;
    const senha = "Teste@12345";

    page.visit();

    page.emailRegister()
      .type(email)
      .should("have.value", email);

    page.passwordRegister()
      .type(senha)
      .should("have.value", senha);

    page.submitRegister().click();

    cy.get("body").should("be.visible");
  });

});
