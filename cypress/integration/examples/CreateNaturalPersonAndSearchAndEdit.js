/// <reference types="Cypress" />
describe('Create Client Scenario', () => {
    it('Create Natural Person Test', function() {
        cy.login(Cypress.env('brokerUserid'),Cypress.env('brokerPassword'));
        const filePath = './/cypress//Testdata//CreateNaturalPersonData.xlsx';
            cy.task('excelToJsonCoverter',filePath).then(function(result){
               cy.log(result);
               cy.CreateNaturalClient(result.data[1].A,result.data[1].B);
            })
            

         });

         it('Negetive Scenario of Create Natural Person Client', () => {
            cy.login(Cypress.env('brokerUserid'),Cypress.env('brokerPassword'));
            cy.NegetiveScenariosCreateNaturalClient();
         });
        
    });
