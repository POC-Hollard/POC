class RegisterNewRepresentativePage{

    getIdOrPassport(){
        return cy.contains('ID/Passport').next();
    }

    getIdorPassportSelect(value){
           
        if(value=='passport'){
            return cy.get('#react-select-2-option-1')
        }else{
            return cy.get('#react-select-2-option-0')
        }
    }

    getIdOrPassportNumber(){
        return cy.contains('ID/Passport number').next();
    }

    getFullName(){
        return cy.contains('Full name').next();
    }

    getCellPhone(){
        return cy.get('input[name="cellphoneNumber"]');
    }

    getEmail(){
        return cy.contains('Email').next();
    }

    getCreateUser(){
        return cy.get('.CreateUsersstyle__ButtonContainer-sc-1ouxefl-3 > .sc-bYEvvW');
    }

    getSuccessMessage(){
        return cy.get('.CreateUsersSuccessModalstyles__Text-sc-1fknsc9-2');
    }

    getOkButton(){
        return cy.get('button[class="sc-bYEvvW gNrbJN CreateUsersSuccessModalstyles__ButtonContainer-sc-1fknsc9-3 ftAJWv"][type="submit"]');
     }
}

export default RegisterNewRepresentativePage