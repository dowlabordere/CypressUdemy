/// <reference types="cypress" />

describe('My first Test Suite', function () {

    it('My first test case', function () {

        //checkBoxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2','option3'])

        //static drop down
        cy.get('select').select('option2').should('have.value','option2')

        //dynamic drop down
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el) => {
            if($el.text()==='India'){
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')

        // visible of element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')

        
    })

})