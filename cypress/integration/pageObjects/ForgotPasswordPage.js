class ForgotPassword{

    getEmailId(){
        return cy.get('#username');

    }

    getBackToLogin(){
        return cy.get('#link-reset');
    }

    getSubmitButton(){
        return cy.get('button[type="submit"]');
    }



}

export default ForgotPassword