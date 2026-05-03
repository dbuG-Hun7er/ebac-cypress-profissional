const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'public',
    overwrite: false,
    html: true,
    json: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://lojaebac.ebaconline.art.br/#",
  },
});