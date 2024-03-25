class ContactInformationEditPage{

    getCellPhNum(){
        return cy.get('input[name="cellphoneNumber"]');
    }

    getWorkTelNum(){
        return cy.get('input[name="workTelephoneNumber"]');
    }

    getEmailAddress(){
        return cy.get('input[name="emailAddress"]');
    }

    getAltEmailAddress(){
        return cy.get('input[name="altEmailAddress"]');
    }

    getSaveButton(){
        return cy.get(':nth-child(10) > .rc-dialog-root > .rc-dialog-wrap > .rc-dialog > .rc-dialog-content > .rc-dialog-body > .ClientDetailsModalstyles__ModalContent-sc-1krwi5j-2 > .ClientDetailsModalstyles__ModalFooter-sc-1krwi5j-5 > .sc-bYEvvW');
    }

}

export default ContactInformationEditPage