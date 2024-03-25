class CreateClientRecordPage{

    getConfirmCheckbox(){
        return cy.get('input[name="default"]').next();
    }

    getContinueButton(){
        return cy.contains('CONTINUE');
    }

    getJuristicPersonRadioButton(){
        return cy.get('input[value="juristic"]');
    }
    
}

export default CreateClientRecordPage