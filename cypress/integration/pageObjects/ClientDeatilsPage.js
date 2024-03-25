class ClientDeatilsPage{

    getEditButtonOfClientDetails(){
        return cy.get('div[data-text="Accordion | Client details"] div a')
    }

    getEditButtonOfContactInformation(){
        return cy.get('div[data-text="Accordion | Contact information"] div a')
    }

    getName(){
        return cy.contains('Name').next();
    }

    getSurName(){
        return cy.contains('Surname').next();
    }

    getRegistrationNumber(){
        return cy.contains('Registration number').next();
    }

    getVatNumber(){
        return cy.contains('VAT number').next();
    }

    getCellPhoneNum(){
        return cy.contains('Cell phone number').next();
    }

    getEmailAddress(){
        return cy.contains('Email address').next();
    }

    getAltEmailAddress(){
        return cy.contains('Alternate email address').next();
    }

    getContactInfoExpandArrow(){
        return cy.get('.ClientDetailsstyle__Body-sc-1uhf0ha-1 > :nth-child(2) > .Accordionstyles__AccordionItem-sc-1v171gx-1 > .Accordionstyles__AccordionTitle-sc-1v171gx-2 > .Accordionstyles__ExpandIcon-sc-1v171gx-12');
    }

    getNewQuoteButton(){
        return cy.contains('NEW QUOTE');
    }

}

export default ClientDeatilsPage