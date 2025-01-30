const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    defaultCommandTimeout: 10000, // aumenta o tempo limite
    requestTimeout: 15000, // aumenta o tempo limite de requisições
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },

    //specPattern: "cypress/e2e/step_definitions/*.feature"

  },
});
