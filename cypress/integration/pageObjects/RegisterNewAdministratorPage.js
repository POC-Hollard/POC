class RegisterNewAdministratorPage{

    getFullName(){
        return cy.contains('Full name').next();
    }

    getEmailAddress(){
        return cy.contains('Email').next();
    }

    getTitle(){
        return cy.contains('Title').next();
    }

    getSelectMrFromTitle(){
       return cy.get('#react-select-2-option-0');
    }

    getTelephoneNumber(){
        return cy.get('input[name="telephoneNumber"]');
    }

    getCliamHandlerRadioButton(value){
         if(value=='yes'){
            return cy.get('input[name="claimHandler"][value="1"]');
         }else{
            return cy.get('input[name="claimHandler"][value="0"]');
         }
    }

    getAdminUserRadioButton(value){
        if(value=='yes'){
           return cy.get('input[name="adminUser"][value="1"]');
        }else{
           return cy.get('input[name="adminUser"][value="0"]');
        }
   }

   getCreateUser(){
    return cy.contains('CREATE USER');
   }

   getInitials(){
    return cy.get('input[name="initials"]');
   }

   getSuccessMessage(){
      return cy.get('.CreateUsersSuccessModalstyles__Text-sc-1fknsc9-2');
  }

  getOkButton(){
   return cy.get('button[class="sc-bYEvvW gNrbJN CreateUsersSuccessModalstyles__ButtonContainer-sc-1fknsc9-3 ftAJWv"][type="submit"]');
}

    
}

export default RegisterNewAdministratorPage;
