
import Login from '../integration/pageObjects/LoginPage'
import ForgotPassword from '../integration/pageObjects/ForgotPasswordPage'
import ContactUs from '../integration/pageObjects/ContactUsPage'
import LandingPage from '../integration/pageObjects/LandingPage'
import CreateClientRecordPage from '../integration/pageObjects/CreateClientRecordPage'
import CreateNaturalPersonPage from '../integration/pageObjects/CreateNaturalPersonPage'
import CreateJuristicPersonPage from '../integration/pageObjects/CreateJuristicPersonPage'
import Util from '../integration/ReuableFunctions/util'
import UserManagementPage from '../integration/pageObjects/UserManagementPage'
import RegisterNewUserPage from '../integration/pageObjects/RegisterNewUserPage'
import RegisterNewAdministratorPage from '../integration/pageObjects/RegisterNewAdministratorPage'
import RegisterNewRepresentativePage from '../integration/pageObjects/RegisterNewRepresentativePage'
import HollardReuableFunctions from '../integration/ReuableFunctions/HollardReuableFunctions'
import NewQuotePage from '../integration/pageObjects/NewQuotePage'
import ClientDeatilsPage from '../integration/pageObjects/ClientDeatilsPage'
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

Cypress.Commands.add('login', (email,password) =>{
        const loginPage = new Login();
        cy.visit(Cypress.env('url'));
        loginPage.getUserId().should('be.visible');
        loginPage.getUserId().type(email);
        loginPage.getPassword().should('be.visible');
        loginPage.getPassword().type(password);
        loginPage.getLoginButton().should('be.visible');
        loginPage.getLoginButton().click();
        cy.wait(9000)
        cy.url().should('include','workbench');
})

Cypress.Commands.add('loginAsAdmin', (email,password) =>{
        const loginPage = new Login();
        const landingPage = new LandingPage();
        cy.visit(Cypress.env('url'));
        loginPage.getUserId().should('be.visible');
        loginPage.getUserId().type(Cypress.env(email));
        loginPage.getPassword().should('be.visible');
        loginPage.getPassword().type(Cypress.env(password));
        loginPage.getLoginButton().should('be.visible');
        loginPage.getLoginButton().click();
        cy.wait(9000)
        landingPage.getUserManagement().should('be.visible');
})

Cypress.Commands.add('forgotPassword', (emailid) =>{
        const loginPage = new Login();
        const forgotPasswordPage = new ForgotPassword();
        cy.visit(Cypress.env('url'));
        loginPage.getForgotPassword().should('be.visible');
        loginPage.getForgotPassword().click();
        forgotPasswordPage.getEmailId().should('be.visible');
        forgotPasswordPage.getBackToLogin().should('be.visible');
        forgotPasswordPage.getSubmitButton().should('be.visible');
        cy.wait(4000)
        forgotPasswordPage.getEmailId().type(emailid);
        forgotPasswordPage.getSubmitButton().click({force:true});
        Cypress.config('defaultCommandTimeout',7000);
        forgotPasswordPage.getBackToLogin().click({force:true});
        cy.wait(3000)
        cy.url().should('include','auth');
        cy.log('Back to Login Button is working as expected')

})

Cypress.Commands.add('contactus',(name,surname,email,description,fileuploadLoc)=>{
        const loginPage = new Login();
        const contact = new ContactUs();
        cy.visit(Cypress.env('url'));
        loginPage.getContactUsLink().click();
        contact.getName().type(name);
        contact.getSurname().type(surname);
        contact.getEmailAddress().type(email);
        contact.getSelectIssue().click({force: true});
        cy.wait(4000)
        cy.get('#react-select-2-option-0').click();
        contact.getTextArea().type(description);
        contact.getUploadFile().selectFile(fileuploadLoc);
        contact.getSubmit().click({force:true});
        cy.wait(3000)
        contact.getErrorMessage().then((ele)=>{
           const err = ele.text();
           
           if(err.includes('Something went wrong. Please contact your Hollard broker consultant!')){
                expect(true).to.equal(false)
           }else{
                expect(true).to.equal(true)
           }
        })


})

Cypress.Commands.add('LoginnegetiveScenarios', ()=>{
        const loginPage = new Login();
        const contact = new ContactUs();
        const forgotPasswordPage = new ForgotPassword();
        cy.visit(Cypress.env('url'));
        loginPage.getLoginButton().click();
        cy.fixture('ErrorMessagesLogin').then(function(data){    
                this.data=data;
        cy.contains(this.data.emptyEmailErrorMessage);
        cy.contains(this.data.emptyPasswordErrorMessage);
        loginPage.getForgotPassword().click();
        cy.wait(2000);
        forgotPasswordPage.getSubmitButton().click({force:true});
        cy.contains(this.data.emptyForgotPasswordEmailErrorMessage).should('be.visible');
        forgotPasswordPage.getBackToLogin().click();
        loginPage.getContactUsLink().click();
        contact.getSubmit().click({force:true});
        cy.contains(this.data.emptyNameOnContactUsErrorMessage).should('be.visible');
        cy.contains(this.data.emptySurnameOnContactUsErrorMessage).should('be.visible');
        cy.contains(this.data.emptyEmailOnContactUsErrorMessage).should('be.visible');
        cy.contains(this.data.emptyIssueOnContactUsErrorMessage).should('be.visible');
        cy.contains(this.data.emptyDescribeOnContactUsErrorMessage).should('be.visible');
        })
})

Cypress.Commands.add('CreateNaturalClient' ,(deceasedDate,birthdate)=>{
        const landingPage = new LandingPage();
        const createClientRecordPage = new CreateClientRecordPage();
        const createNaturalPerson =  new CreateNaturalPersonPage();
        const hollardReusable = new HollardReuableFunctions();
        const util =new Util();
        landingPage.getsearchQuotesLink().click();
        landingPage.getCreateClientButton().click();
        createClientRecordPage.getConfirmCheckbox().click();
        createClientRecordPage.getContinueButton().click();
        createNaturalPerson.getTitle().click();
        createNaturalPerson.getMrOption().click();
        const name = util.makeid(5);
        const surname = util.makeid(5);
        createNaturalPerson.getName().type(name);
        cy.log(`Name which is used is ${name}`)
        createNaturalPerson.getSurname().type(surname);
        cy.log(`Surname which is used is ${surname}`)
        createNaturalPerson.getMatrialStatus().click();
        createNaturalPerson.getMatrialStatusOption().click();
        createNaturalPerson.getGender().click();
        createNaturalPerson.getGenderOption().click();
        createNaturalPerson.getIdType().click();
        createNaturalPerson.getIdTypeAsPassport().click();
        createNaturalPerson.getPassportNumberFiled().type(util.makeRandomPassportNumber());
        createNaturalPerson.getDeceasedDate().type(deceasedDate);
        createNaturalPerson.getPreferredMethodOfCommunication().click();
        createNaturalPerson.getPreferredMethodEmailOption().click();

        createNaturalPerson.getHomeTelephoneNumber().type(util.generateRandomNumber(9));
        createNaturalPerson.getLandLine().type(util.generateRandomNumber(9));
        createNaturalPerson.getMobileNumber().type(util.generateRandomNumber(9));
        
        createNaturalPerson.getEmailAdddress().type(util.makeid(5)+'@gmail.com');
        createNaturalPerson.getAlternativeEmailAddress().type(util.makeid(5)+'@gmail.com');

        hollardReusable.addAddressandClickCreateClient('naturalperson');
       
        hollardReusable.addEmployeementDeatils(birthdate);

        createNaturalPerson.getCreateClientButton().click();   
        cy.wait(15000) ;
        hollardReusable.searchNaturalPerson(name,surname)

        hollardReusable.editClientDeatilsNaturalPerson();

      });

      Cypress.Commands.add('createSuperUser',()=>{
        const landingPage = new LandingPage();
        const userManagementPage = new UserManagementPage();
        const registerNewUserPage = new RegisterNewUserPage();
        landingPage.getUserManagement().click();
        userManagementPage.getCreateUser().click();
        cy.wait(3000);
        registerNewUserPage.getSuperUserCheckbox().click({force: true});
        registerNewUserPage.getIsPrimaryIndividualSameAsSuperUser('yes').click({force: true});
        registerNewUserPage.getIsSuperUserRequireRepresentativeProfile('no').click({force: true});
        registerNewUserPage.getCreateUser().click();
        cy.wait(20000);
        registerNewUserPage.getSuccessMessage().then(ele =>{
                const successMessage = ele.text();
           
           if(successMessage.includes('User successfully created.')){
                expect(true).to.equal(true)
           }else{
                expect(true).to.equal(false)
           }
        })

        registerNewUserPage.getOkButton().click();

      })

      Cypress.Commands.add('createAdministratorUser' ,()=>{
        const landingPage = new LandingPage();
        const userManagementPage = new UserManagementPage();
        const registerNewUserPage = new RegisterNewUserPage();
        const registerNewAdministratorPage = new RegisterNewAdministratorPage();
        const util =new Util();
        landingPage.getUserManagement().click();
        userManagementPage.getCreateUser().click();
        cy.wait(3000);
        registerNewUserPage.getAdministratorUserCheckbox().click({force: true});
        registerNewAdministratorPage.getFullName().type(util.makeid(5)+" "+util.makeid(5));
        registerNewAdministratorPage.getEmailAddress().type(util.makeid(5)+'@gmail.com'); // put it in excel
        registerNewAdministratorPage.getInitials().type(util.makeid(5));
        registerNewAdministratorPage.getTitle().click();
        registerNewAdministratorPage.getSelectMrFromTitle().click();
        registerNewAdministratorPage.getTelephoneNumber().type(util.generateRandomNumber(9));
        registerNewAdministratorPage.getCliamHandlerRadioButton('yes').click({force: true});
        registerNewAdministratorPage.getAdminUserRadioButton('yes').click({force: true});
        registerNewAdministratorPage.getCreateUser().click();
        cy.wait(20000);
        registerNewAdministratorPage.getSuccessMessage().then(ele =>{
                const successMessage = ele.text();
           
           if(successMessage.includes('User successfully created.')){
                expect(true).to.equal(true)
           }else{
                expect(true).to.equal(false)
           }
        })

        registerNewAdministratorPage.getOkButton().click();


      })

      Cypress.Commands.add('createRepresentativeUser' , ()=>{

        const landingPage = new LandingPage();
        const userManagementPage = new UserManagementPage();
        const registerNewUserPage = new RegisterNewUserPage();
        const registerNewAdministratorPage = new RegisterNewAdministratorPage();
        const registerNewRepresentativePage = new RegisterNewRepresentativePage();
        const util =new Util();
        landingPage.getUserManagement().click();
        userManagementPage.getCreateUser().click();
        cy.wait(3000);
        registerNewUserPage.getRepresentativeUserCheckbox().click({force: true});
        registerNewRepresentativePage.getIdOrPassport().click();
        registerNewRepresentativePage.getIdorPassportSelect('passport').click();
        registerNewRepresentativePage.getIdOrPassportNumber().type(util.makeRandomPassportNumber());
        let name = util.makeid(5)+' '+util.makeid(5);
        registerNewRepresentativePage.getFullName().type(name);
        cy.log(`#### Representative user name is ${name}`)
        registerNewRepresentativePage.getCellPhone().type(util.generateRandomNumber(9));
        registerNewRepresentativePage.getEmail().type(util.makeid(5)+'@gmail.com');
        registerNewRepresentativePage.getCreateUser().click();
        cy.wait(20000);
        registerNewRepresentativePage.getSuccessMessage().then(ele =>{
                const successMessage = ele.text();
           
           if(successMessage.includes('User successfully created.')){
                expect(true).to.equal(true)
           }else{
                expect(true).to.equal(false)
           }
        })

        registerNewRepresentativePage.getOkButton().click();


      })

      Cypress.Commands.add('NegetiveScenariosCreateNaturalClient',  () =>{

        
        cy.fixture('ErrorMessagesNaturalClient').then(function(data){    
                   this.data=data;
                      

        const createNaturalPerson =  new CreateNaturalPersonPage();
        const landingPage = new LandingPage();
        const createClientRecordPage = new CreateClientRecordPage();
        const util =new Util();
        const hollardReusable = new HollardReuableFunctions();
        landingPage.getsearchQuotesLink().click();
        landingPage.getCreateClientButton().click();
        createClientRecordPage.getConfirmCheckbox().click();
        createClientRecordPage.getContinueButton().click();
        createNaturalPerson.getCreateClientButton().click();
        createNaturalPerson.getCreateClientButton().should('be.visible');
        cy.contains(this.data.titleErrorMessage).should('be.visible');
        cy.contains(this.data.nameErrorMessage).should('be.visible');
        cy.contains(this.data.surnameErrorMessage).should('be.visible');
        cy.contains(this.data.materialStatusErrorMessage).should('be.visible');
        cy.contains(this.data.genderErrorMessage).should('be.visible');
        cy.contains(this.data.idOrPassportErrorMessage).should('be.visible');
        cy.contains(this.data.methodOfCommunicationErrorMessage).should('be.visible');
        cy.contains(this.data.mobileNumberErrorMessage).should('be.visible');
        cy.contains(this.data.emailAddressErrorMessage).should('be.visible');
        cy.contains(this.data.addAddressErrorMessage).should('be.visible');
        cy.contains(this.data.addEmploymentDeatilsErrorMessage).should('be.visible');

        createNaturalPerson.getIdType().click();
        createNaturalPerson.getIdTypeAsPassport().click();
        createNaturalPerson.getPassportNumberFiled().type('674');
        cy.contains(this.data.passportNumberErrorIfEnteredBelowsix).should('be.visible');

        createNaturalPerson.getHomeTelephoneNumber().type(util.generateRandomNumber(5));
        cy.contains(this.data.phonenumberLessThanNineErrorMessage).should('be.visible');
        createNaturalPerson.getLandLine().type(util.generateRandomNumber(6));
        cy.contains(this.data.phonenumberLessThanNineErrorMessage).should('be.visible');
        createNaturalPerson.getMobileNumber().type(util.generateRandomNumber(7));
        cy.contains(this.data.phonenumberLessThanNineErrorMessage).should('be.visible');

        createNaturalPerson.getEmailAdddress().type(util.generateRandomNumber(7));
        cy.contains(this.data.incorrectEmailErrorMessage).should('be.visible');
        createNaturalPerson.getAlternativeEmailAddress().type(util.generateRandomNumber(7));
        cy.contains(this.data.incorrectEmailErrorMessage).should('be.visible');

        hollardReusable.verifyErrorMessagesAddAddress('naturalperson');
        hollardReusable.verifyErrorMessagesAddEmploymentDetails();




})


      })

      
      Cypress.Commands.add('CreateJuristicPersonClient' , ()=>{
        const landingPage = new LandingPage();
        const util =new Util();
        const createClientRecordPage = new CreateClientRecordPage();
        const createJuristicPerson = new CreateJuristicPersonPage();
        const hollardReusable = new HollardReuableFunctions();
        const createNaturalPerson =  new CreateNaturalPersonPage();
        landingPage.getsearchQuotesLink().click();
        landingPage.getCreateClientButton().click();
        createClientRecordPage.getJuristicPersonRadioButton().click({force: true});
        createClientRecordPage.getConfirmCheckbox().click();
        createClientRecordPage.getContinueButton().click();
        cy.wait(15000);

        createJuristicPerson.getJuristicPersonType().click();
        createJuristicPerson.getJuristicPersonTypeOptionValue().click();
        createJuristicPerson.getRegistrationNumber().type(util.generateRandomNumber(6));
        const name = util.makeid(5);
        createJuristicPerson.getName().type(name);
        createJuristicPerson.getVatNumberField().type(util.generateRandomNumber(10));
        createJuristicPerson.getCellPhoneNumber().type(util.generateRandomNumber(9));
        createJuristicPerson.getWorkTelPhNumber().type(util.generateRandomNumber(9));
        createJuristicPerson.getEmailAddress().type(util.makeid(5)+'@gmail.com');
        createJuristicPerson.getAlternativeEmailAddress().type(util.makeid(5)+'@gmail.com');

        hollardReusable.addAddressandClickCreateClient('juristicperson'); 
        createNaturalPerson.getCreateClientButton().click(); 


        

        cy.wait(8000);
        
        hollardReusable.searchJuristicPerson(name);

        hollardReusable.editClientDetailsJuristicPerson();


        



      })

      Cypress.Commands.add('JuristicPersonNegetiveScenario', ()=>{

        cy.fixture('ErrorMessagesJuristicClient').then(function(data){    
                this.data=data;
        const landingPage = new LandingPage();
        const util =new Util();
        const createClientRecordPage = new CreateClientRecordPage();
        const createJuristicPerson = new CreateJuristicPersonPage();
        const hollardReusable = new HollardReuableFunctions();
        const createNaturalPerson =  new CreateNaturalPersonPage();
        landingPage.getsearchQuotesLink().click();
        landingPage.getCreateClientButton().click();
        createClientRecordPage.getJuristicPersonRadioButton().click({force: true});
        createClientRecordPage.getConfirmCheckbox().click();
        createClientRecordPage.getContinueButton().click();
        cy.wait(9000);
        createNaturalPerson.getCreateClientButton().click(); 

       
        
        cy.contains(this.data.emptyJuristicPersonTypeErrorMessage).should('be.visible');
        cy.contains(this.data.emptyRegNumberErrorMessage).should('be.visible');
        cy.contains(this.data.emptyNameErrorMessage).should('be.visible');
        cy.contains(this.data.emptyVatNumberErrorMessage).should('be.visible');
        cy.contains(this.data.emptyPhoneNumberErrorMessage).should('be.visible');
        cy.contains(this.data.emptyEmailAddressErrorMessage).should('be.visible');
        cy.contains(this.data.emptyPhysicalAddressErrorMessage).should('be.visible');
        cy.wait(3000)
        createJuristicPerson.getVatNumberField().type(util.generateRandomNumber(7));
        cy.contains(this.data.incorrectVatNumberErrorMessage).should('be.visible');
        createJuristicPerson.getCellPhoneNumber().type(util.generateRandomNumber(7));
        cy.contains(this.data.incorrectCellNumberErrorMessage).should('be.visible');
        createJuristicPerson.getWorkTelPhNumber().type(util.generateRandomNumber(5));
        cy.contains(this.data.incorrectCellNumberErrorMessage).should('be.visible');
        createJuristicPerson.getEmailAddress().type(util.makeid(5));
        cy.contains(this.data.incorrectEmailAddressErrorMessage).should('be.visible');
        createJuristicPerson.getAlternativeEmailAddress().type(util.makeid(4));
        cy.contains(this.data.incorrectEmailAddressErrorMessage).should('be.visible');

        hollardReusable.verifyErrorMessagesAddAddress('juristicperson');

})



      })
 Cypress.Commands.add('NewQuoteGeneratioUnderNaturalClient', (EmailID,CarUsedfor,VehicleCode,CarType,RegistrationNumber,YearOfManufacture,CarDetailsAvailable,MakeOfCar,ModuleOfTheCar,RegularDriverOfTheCar,DriverslicenseIssueDate,Driverslicencetype,UninterruptedInsurance,CarExcess) =>{
        const landingPage = new LandingPage();
        const ClientDetails = new ClientDeatilsPage();
        const NewQuote = new NewQuotePage();
        landingPage.getsearchQuotesLink().click();
        landingPage.getEmailField().type(EmailID);
        landingPage.getSearchButton().click();
        landingPage.getviewButton1().click();
        ClientDetails.getNewQuoteButton().click();
        cy.wait(5000);
        cy.wait(5000);
        NewQuote.getCarsRadioButton().click();
        NewQuote.getNextButton().click();
        cy.wait(5000);
        NewQuote.getThirdpartyRadioButton().click();
        NewQuote.getPreQuoteNextButton().click();
        NewQuote.getCarUsedFordropdown().type(CarUsedfor).type('{downarrow}{enter}');
        NewQuote.getVehicleCodeDropdown().type(VehicleCode).type('{downarrow}{enter}');
        NewQuote.getPreQuoteNextButton1().click();
        NewQuote.getCarTypeDropdown().type(CarType).type('{downarrow}{enter}');
        NewQuote.getRegistrationNumber().type(RegistrationNumber);
        NewQuote.getRetrieveEnatisDetailsButton().click();
        NewQuote.getRetrieveEnatisDetailsButton().click();
        NewQuote.getYearOfManufacture().type(YearOfManufacture);
        NewQuote.getCarsYOM().click();
        NewQuote.getCarDetailsAvailableDropdown().type(CarDetailsAvailable).type('{downarrow}{enter}');
        NewQuote.getMakeOfCarDropDown().type(MakeOfCar).type('{downarrow}{enter}');
        NewQuote.getModuleOfTheCarDropDown().type(ModuleOfTheCar).type('{downarrow}{enter}');
        NewQuote.getCarDetailsNextButton().click();
        NewQuote.getRegularDriverOfTheCar().type(RegularDriverOfTheCar).type('{downarrow}{enter}');
        NewQuote.getDriverslicenseIssueDate().type(DriverslicenseIssueDate);
        NewQuote.getDriverslicencetype().type(Driverslicencetype).type('{downarrow}{enter}');
        NewQuote.getUninterruptedInsurance().type(UninterruptedInsurance);
        NewQuote.getDriverDetailsNextButtonEnabled().click();
        NewQuote.getDriverDetailsNextButton().click();
        NewQuote.getAditionalInformationNextButton().click();
        cy.wait(5000);
        NewQuote.getCarsExcessDD().click().type('{downarrow}{enter}');
        NewQuote.getUpdateCoverPremium().click();
        cy.wait(5000);
        cy.wait(5000);
        cy.wait(5000);
        cy.wait(5000);
        cy.scrollTo('bottom');
        NewQuote.getCoverSelectionSaveButton().click();
        NewQuote.getQuoteNumber().then((ele)=>{
         const quote = ele.text();
               cy.log(quote);      
         })
})

       
