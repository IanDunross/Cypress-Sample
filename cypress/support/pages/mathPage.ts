import { Selectors } from "../selectors";

export class mathPage {

    chooseMathOperator(mathSymbol:string){
    cy.get(Selectors.selectMathOption)
        .select(mathSymbol)
    }

}