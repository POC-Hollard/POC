
describe('Create Client', () => {
    it('Create Juristic Person Client', () => {
        cy.login(Cypress.env('brokerUserid'),Cypress.env('brokerPassword'));
        cy.CreateJuristicPersonClient();    

    });

    it('Negetive Scenarios Juristic Person', () => {
        cy.login(Cypress.env('brokerUserid'),Cypress.env('brokerPassword'));
        cy.JuristicPersonNegetiveScenario();
    });
});