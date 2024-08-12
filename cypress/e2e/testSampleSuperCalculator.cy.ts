import { globalPage } from "../support/pages/globalPage";
import { mainPage } from "../support/pages/mainPage"
import { mathPage } from "../support/pages/mathPage";
import { Selectors } from "../support/selectors"

const mainPagePO = new mainPage();
const globalPagePO = new globalPage();
const mathPagePO = new mathPage();

beforeEach(() => {
    globalPagePO.goToBaseUrl();
})

describe("Simple example of using Cypress", () => {



    it("Go to page from BASEURL parameter, and check title of the page", () => {

        mainPagePO.checkMainHeader('Super Calculator')

    })

    it("Use custom command for Cypress for enter two values, and check sum result", () => {

        cy.enteringCalculatorValues(2,2);
        mathPagePO.chooseMathOperator('-');
        mainPagePO.clickGoButton();   
``  })
})