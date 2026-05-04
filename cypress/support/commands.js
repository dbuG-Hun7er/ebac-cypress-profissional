import { doLogin } from "../e2e/actions/login.actions";

Cypress.Commands.add("login", (email, senha) => {
  doLogin(email, senha);
});