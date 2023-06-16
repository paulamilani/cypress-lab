const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      user: 'tomsmith',
      pass: 'SuperSecretPassword!',
      userIncorrect: 'tomsmith1'
    },
  },
});
