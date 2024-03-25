class EditClientDeatilsForJuristicPerson{

    getJuristicPersonType(){
        return cy.get('input[id="react-select-7-input"]');
    }

    getJuristicPersonTypeValue(){
        return cy.get('#react-select-7-option-1');
    }

    getRegistrationNumber(){
        return cy.get('input[name="registrationNumber"]');
    }

    getName(){
        return cy.get('input[name="entityName"]');
    }

    getVatNumber(){
        return cy.get('input[name="vatNumber"]');
    }

    getSaveButton(){
        return cy.get('button[class="sc-bYEvvW gNrbJN ClientDetailsModalstyles__ButtonContainer-sc-1krwi5j-4 gMAIYF"]');
    }
}

export default EditClientDeatilsForJuristicPerson