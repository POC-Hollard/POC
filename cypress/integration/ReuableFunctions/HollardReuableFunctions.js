import CreateNaturalPersonPage from '../pageObjects/CreateNaturalPersonPage'
import LandingPage from '../pageObjects/LandingPage'
import createNaturalPersonPage from '../pageObjects/CreateNaturalPersonPage'
import ClientDeatilsPage from '../pageObjects/ClientDeatilsPage';
import EditClientPage from '../pageObjects/EditClientPage';
import Util from './util';
import EditClientDeatilsForJuristicPerson from '../pageObjects/EditClientDeatilsForJuristicPerson';
import ContactInformationEditPage from '../pageObjects/ContactInformationEditPage';

class HollardReuableFunctions{
    

    addAddressandClickCreateClient(value){
    const createNaturalPerson =  new CreateNaturalPersonPage();
    createNaturalPerson.getAddAddressButton().click();
        createNaturalPerson.getStreetNoAndName().type('De Deur');
        createNaturalPerson.getSuburb().type('BALMORAL ESTATES');
        createNaturalPerson.getAddAdddressHeader().click();
        cy.wait(5000);
        createNaturalPerson.getUntiNoAndComplexName().type('Kalinga Nagar');
        
        createNaturalPerson.getSelectLocation().click();
        cy.wait(5000);
        if(value == 'naturalperson'){
            createNaturalPerson.getfirstAddressOptionSelect('naturalperson').click();
        }else if(value == 'juristicperson'){
            createNaturalPerson.getfirstAddressOptionSelect('juristicperson').click();
        }
        
       
        createNaturalPerson.getAddAddressButtonOnPopup().click();
    }

        verifyErrorMessagesAddAddress(value){
        const createNaturalPerson =  new CreateNaturalPersonPage();
        createNaturalPerson.getAddAddressButton().click();
        createNaturalPerson.getAddAddressButtonOnPopup().click();
        cy.contains('Please capture street no. and name').should('be.visible');
        createNaturalPerson.getStreetNoAndName().type('45');
        cy.contains('Street no. and name must have minimum 3 characters').should('be.visible');
        createNaturalPerson.getStreetNoAndName().clear();
        createNaturalPerson.getStreetNoAndName().type('we');
        cy.contains('Street no. and name must have minimum 3 characters').should('be.visible');
        createNaturalPerson.getSuburb().type('23');
        cy.contains('Suburb must have minimum 3 characters').should('be.visible');
        createNaturalPerson.getSuburb().clear();
        createNaturalPerson.getSuburb().type('ef');
        cy.contains('Suburb must have minimum 3 characters').should('be.visible');
        createNaturalPerson.getSuburb().clear();
        createNaturalPerson.getStreetNoAndName().clear();
        createNaturalPerson.getStreetNoAndName().type('De Deur');
        createNaturalPerson.getAddAddressButtonOnPopup().click();
        cy.wait(9000)
        createNaturalPerson.getLocationErrorMsg().then((value)=>{
           const errorMsg =  value.text();
           expect(errorMsg).to.equal('Please select your location');
        })
        
        createNaturalPerson.getStreetNoAndName().clear();
        createNaturalPerson.getStreetNoAndName().type('De Deur');
        createNaturalPerson.getAddAdddressHeader().click();
        cy.wait(5000);
        createNaturalPerson.getUntiNoAndComplexName().type('Kalinga Nagar');
        createNaturalPerson.getSelectLocation().click();
        cy.wait(3000)
        if(value == 'naturalperson'){
            createNaturalPerson.getfirstAddressOptionSelect('naturalperson').click();
        }else if(value == 'juristicperson'){
            createNaturalPerson.getfirstAddressOptionSelect('juristicperson').click();
        }
        
       
        createNaturalPerson.getAddAddressButtonOnPopup().click();

    }

    verifyErrorMessagesAddEmploymentDetails(){
        const createNaturalPerson =  new createNaturalPersonPage();
        createNaturalPerson.getAddEmploymentDetails().click();
        createNaturalPerson.getAddButton().click();
        cy.contains('Please select employment status').should('be.visible');
        cy.contains('Please select client registration for VAT').should('be.visible');
        createNaturalPerson.getEmploymentStatusDropdown().click({force:true});
        createNaturalPerson.getEmployementStatusDropdownOption().click();
        createNaturalPerson.getClientRegForVATDropdown().click({force: true});
        createNaturalPerson.getClientRegVATDropdownOption().click();
        createNaturalPerson.getAddButton().click();
    }

    searchJuristicPerson(name){

        const landingPage = new LandingPage();
        landingPage.getsearchQuotesLink().click();
        landingPage.getJuristicPersonRadioButton().click({force: true});
        landingPage.getNameOfJuristicPersonField().type(name);
        landingPage.getSearchButton().click();
        cy.wait(8000);
        landingPage.getClientNameFromSearchResult().then((option)=>{
               const clientName = option.text();
               cy.log(clientName)
              expect(clientName).to.equal(name);
             
        })

    }

    editClientDeatilsNaturalPerson(){
        const landingPage = new LandingPage();
       const clientDeatilsPage = new ClientDeatilsPage();
       const editClientPage = new EditClientPage();
       const util =new Util();
        landingPage.getViewButton().click({force: true});
        cy.wait(9000)
        clientDeatilsPage.getEditButtonOfClientDetails().click();
        cy.wait(3000)
        editClientPage.getClientTitleDropDown().click({force: true});
        editClientPage.getMissOption().click();
        const firstname = util.makeid(5);
        const lastname = util.makeid(5);
        cy.wait(3000)
        editClientPage.getName().clear();
        cy.wait(3000)
        editClientPage.getName().type(firstname);
        cy.log(`Edited Name which is used is ${firstname}`)
        editClientPage.getSurname().clear();
        editClientPage.getSurname().type(lastname);
        cy.log(`Edited Surname which is used is ${lastname}`)
        editClientPage.getMatrialStatus().click();
        editClientPage.getMatrialStatusOption().click();
        editClientPage.getGender().click();
        editClientPage.getGenderOption().click();
        editClientPage.getIdType().click();
        editClientPage.getIdTypeAsId().click();
        editClientPage.getIdNumberField().type('2001014800086');
        editClientPage.getSaveButton().click();
        cy.wait(5000);
        editClientPage.getSaveButton().click();
        cy.wait(15000);
        clientDeatilsPage.getName().then(function(value){
             const ExpectedFirstName = value.text();
             cy.log(`Expected FirstName after Edit is ${ExpectedFirstName}`)
             expect(ExpectedFirstName).to.equal(firstname);
        });

        clientDeatilsPage.getSurName().then(function(value){
            const ExpectedSurName = value.text();
            cy.log(`Expected Surname after Edit is ${ExpectedSurName}`);
            expect(ExpectedSurName).to.equal(lastname);
        })




    }

    editClientDetailsJuristicPerson(){
        const landingPage = new LandingPage();
       const clientDeatilsPage = new ClientDeatilsPage();
       const editClientDetailsJuristicPerson = new EditClientDeatilsForJuristicPerson();
       const util =new Util();
       const contactInfoEditPage = new ContactInformationEditPage();
        landingPage.getViewButton().click({force: true});
        cy.wait(9000);
        clientDeatilsPage.getEditButtonOfClientDetails().click();
        cy.wait(3000);
        editClientDetailsJuristicPerson.getJuristicPersonType().click({force: true});
        editClientDetailsJuristicPerson.getJuristicPersonTypeValue().click();
        editClientDetailsJuristicPerson.getRegistrationNumber().clear();
        const updatedRegNum = util.generateRandomNumber(5);
        editClientDetailsJuristicPerson.getRegistrationNumber().type(updatedRegNum);
        editClientDetailsJuristicPerson.getName().clear();
        const updatedName = util.makeid(7);
        editClientDetailsJuristicPerson.getName().type(updatedName);
        editClientDetailsJuristicPerson.getVatNumber().clear();
        const updatedVatNumber = util.generateRandomNumber(10);
        editClientDetailsJuristicPerson.getVatNumber().type(updatedVatNumber);
        editClientDetailsJuristicPerson.getSaveButton().click();
        cy.wait(19000);
        clientDeatilsPage.getName().then(function(jurValue){
          const actualName = jurValue.text();
          cy.log(`Updated name for Juristic Person is ${actualName}`);
          expect(updatedName).to.equal(actualName);
        })

        clientDeatilsPage.getRegistrationNumber().then(function(regValue){
            const actualRegNum = regValue.text();
            cy.log(`Updated Registration Number for Juristic Person is ${actualRegNum}`);
            expect(updatedRegNum).to.equal(actualRegNum);
        })

        clientDeatilsPage.getVatNumber().then(function(vatValue){
           const actualVat = vatValue.text();
           cy.log(`Updated VAT Number for Juristic Person is ${actualVat}`);
           expect(updatedVatNumber).to.equal(actualVat);
        })

        // Juristic person type Validation is not added, as a defect is raised for it by Surabhi. Once fixed will add it.

        clientDeatilsPage.getEditButtonOfContactInformation().click();
        const updatedCellPhNum = util.generateRandomNumber(9);
        contactInfoEditPage.getCellPhNum().clear();
        contactInfoEditPage.getCellPhNum().type(updatedCellPhNum);
        contactInfoEditPage.getWorkTelNum().clear();
        const updatedWorkTelNum = util.generateRandomNumber(9);
        contactInfoEditPage.getWorkTelNum().type(updatedWorkTelNum);
        contactInfoEditPage.getEmailAddress().clear();
        const updatedEmailAddress = util.makeid(5)+'@gmail.com';
        contactInfoEditPage.getEmailAddress().type(updatedEmailAddress);
        contactInfoEditPage.getAltEmailAddress().clear();
        const updatedAltEmailAddress = util.makeid(5)+'@gmail.com';
        contactInfoEditPage.getAltEmailAddress().type(updatedAltEmailAddress);
        contactInfoEditPage.getSaveButton().click();

        cy.wait(19000)

        clientDeatilsPage.getContactInfoExpandArrow().click();

        clientDeatilsPage.getEmailAddress().then(function(emailAddValue){
              const actualEditedEmail = emailAddValue.text();
              expect(updatedEmailAddress).to.equal(actualEditedEmail);
        })

        clientDeatilsPage.getAltEmailAddress().then(function(altEmailValue){
            const actualAltEmailAddress = altEmailValue.text();
            expect(updatedAltEmailAddress).to.equal(actualAltEmailAddress);
        })

        


    }

    searchNaturalPerson(name,surname){
        const landingPage = new LandingPage();
        landingPage.getsearchQuotesLink().click();
        landingPage.getSurnameField().type(surname);
        landingPage.getSearchButton().click();
        cy.wait(8000);
        landingPage.getClientNameFromSearchResult().then((option)=>{
               const clientName = option.text();
               cy.log(clientName)
              let client =  clientName.split(" ");
              expect(client[0]).to.equal(name);
              expect(client[1]).to.equal(surname);
             
        })
    }

    addEmployeementDeatils(date){
        const createNaturalPerson =  new createNaturalPersonPage();
        createNaturalPerson.getAddEmploymentDetails().click();
        createNaturalPerson.getEmploymentStatusDropdown().click({force:true});
        createNaturalPerson.getEmployementStatusDropdownOption().click();
        createNaturalPerson.getClientRegForVATDropdown().click({force: true});
        createNaturalPerson.getClientRegVATDropdownOption().click();
        createNaturalPerson.getAddButton().click();
        createNaturalPerson.getDateOfBirth().type(date)


    }

}

export default HollardReuableFunctions