# EBAC Cypress Professional 🧪

Projeto de automação de testes **E2E com Cypress**, desenvolvido como parte da formação em Engenharia de Qualidade de Software (EBAC), com foco em **boas práticas, organização e escalabilidade**, simulando um projeto real de mercado.

---

## 🎯 Objetivo do Projeto

Automatizar fluxos críticos de um e-commerce utilizando Cypress, aplicando conceitos profissionais de QA como:

- Testes End-to-End
- Page Objects
- Actions (fluxos de negócio)
- Fixtures (dados desacoplados)
- Interceptação de requisições
- Organização por módulos

---

## 🗂 Estrutura do Projeto

cypress/
├── actions/ # Fluxos de negócio (App Actions)
│ └── checkout.actions.js
│
├── e2e/ # Testes E2E organizados por módulo
│ ├── m22/
│ │ ├── account.create.cy.js
│ │ └── checkout.flow.cy.js
│ │
│ └── m23/
│ └── cart.intercept.cy.js
│
├── fixtures/ # Dados versionados para testes
│ ├── user.json
│ ├── address.json
│ └── products.json
│
├── pages/ # Page Objects (mapeamento de telas)
│ ├── account.page.js
│ ├── product.page.js
│ ├── cart.page.js
│ └── checkout.page.js
│
└── support/
├── commands.js # Comandos customizados
└── e2e.js # Configurações globais do Cypress


---

## ⚙️ Tecnologias Utilizadas

- **Cypress**
- **JavaScript**
- **Node.js**
- **Page Object Model (POM)**
- **Intercept (mock e validação de API)**

---

## 🚀 Como executar o projeto

### Pré-requisitos
- Node.js instalado
- NPM ou Yarn

### Instalação
```bash
npm install

Executar Cypress
npx cypress open


ou em modo headless:

npx cypress run
```


🌐 Aplicação testada

E-commerce EBAC
Base URL configurada via cypress.config.js.

📌 Observações

Projeto em evolução contínua

Estrutura pensada para simular projetos reais de automação

Foco em legibilidade, manutenção e boas práticas

Parte dos testes e fluxos serão incrementados conforme avanço do curso

👤 Autor

Projeto desenvolvido por Lucas F. de Lima
QA em construção, com foco em automação de testes, qualidade de software e boas práticas de QA.
