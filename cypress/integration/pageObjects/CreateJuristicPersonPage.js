class CreateJuristicPersonPage{

    getJuristicPersonType(){
        return cy.contains('Juristic person type').next();
    }

    getJuristicPersonTypeOptionValue(){
        return cy.get('#react-select-5-option-0');
    }

    getRegistrationNumber(){
        return cy.contains('Registration number').next();
    }

    getName(){
        return cy.contains('Name').next();
    }

    getVatNumberField(){
        return cy.contains('VAT number').next();
    }

    getCellPhoneNumber(){
        return cy.get('input[name="cellphoneNumber"]');
    }

    getWorkTelPhNumber(){
        return cy.get('input[name="workTelephoneNumber"]');
    }

    getEmailAddress(){
        return cy.get('input[name="emailAddress"]');
    }

    getAlternativeEmailAddress(){
        return cy.get('input[name="altEmailAddress"]');
    }

}

export default CreateJuristicPersonPage