export class globalPage{

    goToBaseUrl(){
        cy.visit(Cypress.config().baseUrl)
    }
}