class CreateNaturalPersonPage{

    getTitle(){
        return cy.contains('Title').next();
    }

    getMrOption(){
        return cy.get('#react-select-5-option-12');
    }

    getName(){
        return cy.contains('Name').next();
    }

    getSurname(){
        return cy.contains('Surname').next();
    }

    getMatrialStatus(){
        return cy.contains('Marital status').next();
    }

    getMatrialStatusOption(){
        return cy.get('#react-select-6-option-1');
    }

    getGender(){
        return cy.contains('Gender').next();
    }

    getGenderOption(){
        return cy.get('#react-select-7-option-1');
    }

    getIdType(){
        return cy.contains('ID type').next();
    }

    getIdTypeAsPassport(){
        return cy.get('#react-select-8-option-1');
    }

    getPassportNumberFiled(){
        return cy.contains('ID/Passport number').next();
    }

    getDeceasedDate(){
        return cy.contains('Deceased date').next();
    }

    getPreferredMethodOfCommunication(){
        return cy.contains('Preferred method of communication').next();
    }

    getPreferredMethodEmailOption(){
        return cy.get('#react-select-9-option-0');
    }

    getHomeTelephoneNumber(){
        return cy.get('input[name="homeTelephoneNumber"]');
    }

    getLandLine(){
        return cy.get('input[name="landlineWork"]');
    }

    getMobileNumber(){
        return cy.get('input[name="mobilePhone"]')
    }

    getEmailAdddress(){
        return cy.get('input[name="emailAddress"]');
    }

    getAlternativeEmailAddress(){
        return cy.get('input[name="altEmailAddress"]');
    }

    getAddAddressButton(){
        return cy.contains('ADD ADDRESS');
    }

    getStreetNoAndName(){
        return cy.get('input[name="addressLineOne"]');
    }

    getAddAdddressHeader(){
        return cy.contains('Add address');
    }

    getUntiNoAndComplexName(){
        return cy.get('input[name="addressLineTwo"]');
    }

    getSuburb(){
        return cy.get(':nth-child(3) > .AddressModalstyles__FormGroup-sc-i5qxjz-9 > .AddressModalstyles__Input-sc-i5qxjz-11');
    }

    getSelectLocation(){
        return cy.contains('Select your location').next();
    }

    getAllLocationOptions(){
        return cy.get('#react-select-13-listbox');
    }

    getfirstAddressOptionSelect(value){
        if(value == 'naturalperson'){
            return cy.get('#react-select-13-option-0'); 
        }else if(value == 'juristicperson'){
            return cy.get('#react-select-8-option-0'); 
        }
        
    }

    getAddAddressButtonOnPopup(){
        return cy.get('.AddressModalstyles__ModalFooter-sc-i5qxjz-5 > .sc-bYEvvW');
    }

    getAddEmploymentDetails(){
        return cy.contains('ADD EMPLOYMENT DETAILS');
    }

    getEmploymentStatusDropdown(){
        return cy.get('#react-select-14-placeholder');
    }

    getLocationErrorMsg(){
        return cy.get('.AddressModalstyles__FormError-sc-i5qxjz-10');
    }

    getEmployementStatusDropdownOption(){
        return cy.get('#react-select-14-option-2');
    }

    getClientRegForVATDropdown(){
        return cy.get('#react-select-15-placeholder');
    }

    getClientRegVATDropdownOption(){
        return cy.get('#react-select-15-option-1');
    }

    getAddButton(){
        return cy.get('.EmploymentModalstyles__ModalFooter-sc-1atwkbz-5 > .sc-bYEvvW');
    }

    getCreateClientButton(){
        return cy.contains('CREATE CLIENT');
    }

    getDateOfBirth(){
        return cy.contains('Date of birth').next();
    }
}

export default CreateNaturalPersonPage