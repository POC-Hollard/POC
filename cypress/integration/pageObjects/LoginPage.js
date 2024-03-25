class Login{

    getUserId(){
        return cy.get('#username');
    }

    getPassword(){
        return cy.get('#password');
    }

    getLoginButton(){
        return cy.get(':nth-child(3) >button[type="submit"]');
    }

    getForgotPassword(){
        return cy.get('#link-reset');
    }

    getContactUsLink(){
        return cy.get('#link-contact-us');
    }
}

export default Login