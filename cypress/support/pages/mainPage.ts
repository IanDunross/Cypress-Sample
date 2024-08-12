import { Selectors } from "../selectors"
export class mainPage {
    checkMainHeader(name: string) {
        cy.get(Selectors.mainHeader)
            .should('be.visible')
            .should('have.text', name);
    }
    clickGoButton() {
        cy.get(Selectors.goButton)
            .should('be.visible')
            .click();
    }

}