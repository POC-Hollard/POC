class ContactUs{

    getName(){
        return cy.get('#name');
    }

    getSurname(){
        return cy.get('#surname');
    }

    getEmailAddress(){
        return cy.get('#emailAddress');
    }

    getSelectIssue(){
        return cy.get('.css-19bb58m');
    }

    getTextArea(){
       return cy.get('textarea[name="description"]');
    }

    getUploadFile(){
        return cy.get('#uploadedFile');
    }

    getSubmit(){
        return cy.contains('Submit');
    }

    getErrorMessage(){
       return cy.get('.GenericMessagestyles__MessageContentConatainer-sc-69d6bo-3')
    }






}

export default ContactUs