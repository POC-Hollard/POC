class NewQuote{

    getCarsRadioButton(){
        return cy.contains('Cars');
    }

    getNextButton(){
        return cy.get('button[class="MuiButtonBase-root MuiButton-root jss65 ib-button-field-root MuiButton-contained jss67 MuiButton-containedPrimary"]');
    }

    getThirdpartyRadioButton(){
        return cy.contains('Third party');
    }

    getPreQuoteNextButton(){
        return cy.get('div[data-id="715cbdf1-9335-4e16-bffa-72bd25565b7f"] button');
    }

    getCarUsedFordropdown(){
        return cy.get('input[placeholder="What is car used for"]');
    }

    getVehicleCodeDropdown(){
        return cy.get('input[placeholder="Vehicle code"]');
    }
    
    getPreQuoteNextButton1(){
        return cy.get('.jss610 > .jss36 > .jss43 > .jss16 > .MuiGrid-root > .jss44 > :nth-child(1) > .MuiButtonBase-root');
    }

    getCarTypeDropdown(){
        return cy.get('input[placeholder="Car type"]');
    }

    getRegistrationNumber(){
        return cy.get('input[placeholder="Registration number"]');
    }

    getRetrieveEnatisDetailsButton(){
        return cy.get('div[data-id="93219c8f-1cd4-4c97-869d-694c87dbb481"]')
    }

    getYearOfManufacture()
    {
        return cy.get('input[placeholder="Year of manufacture"]');
    }

    getCarDetailsAvailableDropdown(){
        return cy.get('input[placeholder="Car details available"]');
    }

    getMakeOfCarDropDown(){
        return cy.get('input[placeholder="Make of car"]');
    }

    getModuleOfTheCarDropDown(){
        return cy.get('input[placeholder="Model of the car"]');
    }

    getCarDetailsNextButton(){
        return cy.get('.jss2145 > .jss44 > :nth-child(1) > .MuiButtonBase-root');
    }
    
    getCarsYOM(){
        return cy.contains('1902');
    }

    getRegularDriverOfTheCar(){
        return cy.get('input[placeholder="Regular driver"]')
    }

    getDriverslicenseIssueDate(){
        return cy.get('input[placeholder="Drivers license issue date"]');
    }

    getDriverslicencetype(){
        return cy.get('div[data-id="4b10c5f8-28cd-4483-afaa-5da910467133"]');
    }

    getUninterruptedInsurance(){
        return cy.get('input[placeholder="Uninterrupted insurance"]');
    }

    getDriverDetailsNextButtonEnabled()
    {
        return cy.get('.jss2864 > .jss36');
    }

    getDriverDetailsNextButton(){
        return cy.get('.jss2864 > .jss36 > .jss43 > .jss16 > .MuiGrid-root > .jss44 > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label > .jss66 > .n-markdown-7-2-1 > span > p');
    }

    getAditionalInformationNextButton(){
        return cy.get('.jss3799 > .jss44 > :nth-child(1) > .MuiButtonBase-root > .MuiButton-label > .jss66 > .n-markdown-7-2-1 > span > p');
    }
    
    getCarsExcessDD(){
        return cy.get('input[placeholder="Cars excess"]');
    }

    getUpdateCoverPremium(){
        return cy.contains('UPDATE COVER PREMIUM');
    }

    getCoverSelectionSaveButton(){
        return cy.get('.jss4584 > .jss36 > .jss43 > .jss16 > .MuiGrid-root > .jss44 > :nth-child(1) > .MuiButtonBase-root');
    }

    getQuoteNumber(){
        return cy.get('span[class="textOverflow"]');
    }
}

export default NewQuote