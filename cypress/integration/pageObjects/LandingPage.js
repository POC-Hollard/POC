class LandingPage{

    getsearchQuotesLink(){
        return cy.contains('Search quotes, policies and claims');
    }

    getUserManagement(){
        return cy.contains('User management');
    }
    
    getCreateClientButton(){
        return cy.contains('CREATE NEW CLIENT');
    }

    getSurnameField(){
        return cy.get('input[name="surname"]');
    }

    getSearchButton(){
        return cy.contains('SEARCH');
    }

    getClientNameFromSearchResult(){
        return cy.get('tr td:nth-child(1)');
    }

    getJuristicPersonRadioButton(){
        return cy.get('input[value="juristicPerson"]');
    }

    getNameOfJuristicPersonField(){
        return cy.get('input[name="entityName"]');
    }

    getViewButton(){
        return cy.contains('View');
    }

    getEmailField(){
        return cy.get('input[name="emailAddress"]');
    }

    getviewButton1(){
         return cy.get('#desktopView > tbody > tr:nth-child(2) > td:nth-child(5)');
    }
    
}

export default LandingPage