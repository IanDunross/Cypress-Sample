const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://juliemr.github.io/protractor-demo/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
