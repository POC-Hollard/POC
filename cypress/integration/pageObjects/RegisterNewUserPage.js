class RegisterNewUserPage{

    getSuperUserCheckbox(){
        return cy.get('input[value="superUser"]');
    }

    getAdministratorUserCheckbox(){
        return cy.get('input[value="administrator"]');
    }

    getRepresentativeUserCheckbox(){
        return cy.get('input[value="representative"]');
    }

    getIsPrimaryIndividualSameAsSuperUser(value){

        if(value == 'yes'){
            return cy.get('input[name="isPrimaryUser"][value="1"]');
        }else{
            return cy.get('input[name="isPrimaryUser"][value="0"]');
        }

    }

    getIsSuperUserRequireRepresentativeProfile(value){
        if(value == 'yes'){
           return cy.get('input[name="isRepresentativeUser"][value="1"]');
        }else{
            return cy.get('input[name="isRepresentativeUser"][value="0"]');
        }
    }

    getCreateUser(){
        return cy.contains('CREATE USER');
    }

    getSuccessMessage(){
        return cy.get('.CreateUsersSuccessModalstyles__Text-sc-1fknsc9-2');
    }

    getOkButton(){
        return cy.get('button[class="sc-bYEvvW gNrbJN CreateUsersSuccessModalstyles__ButtonContainer-sc-1fknsc9-3 ftAJWv"][type="submit"]');
    }

}

export default RegisterNewUserPage;