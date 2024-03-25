import 'cypress-iframe'

describe('LoginFeature', () => {
      //   beforeEach(()=>{
      //   cy.fixture('LoginData').then(function(data){    //Uncomment this if you want data from json file.
      //   this.data=data;
      //       })
      //   })

        it('Login Test', function() {
           cy.login(Cypress.env('brokerUserid'),Cypress.env('brokerPassword'));

         });

        

         it('ForgetPassword Test', function() {
            cy.forgotPassword(Cypress.env('userid'));

         });

         it('Contact Us Test', function() {
            const filePath = './/cypress//Testdata//LoginData.xlsx';
            cy.task('excelToJsonCoverter',filePath).then(function(result){
               cy.log(result);
               cy.contactus(result.Sheet1[1].C,result.Sheet1[1].D,result.Sheet1[1].E,result.Sheet1[1].F,result.Sheet1[1].G);
            })
            

         });

         it('Login Negetive Scenarios', () => {
            cy.LoginnegetiveScenarios();
            cy.wait(2000);
         });

         
        });