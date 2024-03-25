

describe('Create User Scenario', () => {
    it('Create Super user', () => {
        cy.loginAsAdmin(Cypress.env('brokerUserid1'),Cypress.env('brokerPassword1'));
        cy.createSuperUser();
    });

    it('Create Administrator User', () => {
        cy.loginAsAdmin(Cypress.env('brokerUserid1'),Cypress.env('brokerPassword1'));
        cy.createAdministratorUser();
    });

    it('Create Representative User', () => {
        cy.loginAsAdmin(Cypress.env('brokerUserid1'),Cypress.env('brokerPassword1'));
        cy.createRepresentativeUser();
    });
});