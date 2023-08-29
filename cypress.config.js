const { defineConfig } =require('cypress')

module.exports = {
  "defaultCommandTimeout": 5000,
 // projectId: 'gw7pna',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
