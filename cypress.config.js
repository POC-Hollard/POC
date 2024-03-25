const { defineConfig } = require("cypress");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');







module.exports = defineConfig({

  defaultCommandTimeout: 15000,
  projectId: "tugief",
  'reporter':"mochawesome",
  "reporterOptions":{
    "reportDir":"cypress/reports",
    "reportFilename":"report",
    "overwrite":false,
    "html":true,
    "json":true,
    "charts":true,
    "embeddedScreenshots": true,
    "inlineAssets": true
  },

  retries: {
    runMode: 2,
    },

  env: {
    url: "https://testp2-hollard-portal.sapienspaas.com",
    userid: "tempbroker@test.com",
    password: "Test@3004",
    brokerUserid:"tempbroker@test.com",
    brokerPassword:"Test@3004",
    brokerUserid1:"surbhi.sreshtha@sapiens.com",
    brokerPassword1:"Test@3004"
  },

  e2e: {
    setupNodeEvents(on, config) {
      on('task', {

        excelToJsonCoverter(filePath) {
          const result = excelToJson({
            source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
          });
          return result;
        }
    
      })

      return config;
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
