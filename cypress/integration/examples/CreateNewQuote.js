describe('Create New Quote', () => {
    it('Create New Quote for Natural Person Client', () => {
        cy.login(Cypress.env('brokerUserid1'),Cypress.env('brokerPassword1'));

        const filePath = './/cypress//Testdata//NewQuoteJourney.xlsx';
            cy.task('excelToJsonCoverter',filePath).then(function(result){
        cy.NewQuoteGeneratioUnderNaturalClient(result.Sheet1[1].A,result.Sheet1[1].B,result.Sheet1[1].C,result.Sheet1[1].D,result.Sheet1[1].E,result.Sheet1[1].F,result.Sheet1[1].G,result.Sheet1[1].H,result.Sheet1[1].I,result.Sheet1[1].J,result.Sheet1[1].K,result.Sheet1[1].L,result.Sheet1[1].M,result.Sheet1[1].N);    
    })
    });
});