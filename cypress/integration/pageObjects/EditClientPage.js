class EditClientPage{

    getClientTitleDropDown(){
        return cy.get('input[id="react-select-5-input"]')
    }

    getMissOption(){
        return cy.get('#react-select-5-option-11');
    }
    getName(){
        return cy.get('input[name="firstname"]');
    }

    getSurname(){
        return cy.get('input[name="surname"]');
    }

    getMatrialStatus(){
        return cy.get('input[id="react-select-6-input"]')
    }

    getMatrialStatusOption(){
        return cy.get('#react-select-6-option-2');
    }

    getGender(){
        return cy.get('input[id="react-select-7-input"]');
    }

    getGenderOption(){
        return cy.get('#react-select-7-option-0');
    }

    getIdType(){
        return cy.get('input[id="react-select-8-input"]')
    }

    getIdTypeAsId(){
        return cy.get('#react-select-8-option-0');
    }

    getIdNumberField(){
        return cy.get('input[name="idNumber"]');
    }

    getSaveButton(){
        return cy.get('.ClientDetailsModalstyles__ModalFooter-sc-1krwi5j-5 > .sc-bYEvvW');
    }

}

export default EditClientPage