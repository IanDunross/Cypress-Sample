// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {Selectors} from './selectors'



// Example of adding custom command

Cypress.Commands.add('enteringCalculatorValues',(valueFirst:number,valueSecond:number)=>{

    
    cy.get(Selectors.firstInput)
        .should('be.visible')
        .clear()
        .type(valueFirst.toString())
    cy.get(Selectors.secondInput)
        .should('be.visible')
        .clear()
        .type(valueSecond.toString())

})