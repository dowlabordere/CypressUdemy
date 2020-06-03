/// <reference types="cypress" />

describe('My first Test Suite', function () {

    it('My first test case', function () {

        var name = "dowla"

        // popups
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#displayed-text').type(name).then(function(){
            cy.wait(2222)
            cy.get('#alertbtn').click()
        })
        cy.get('[value="Confirm"]').click()

        // window:alert
        cy.on('window:alert',(str) => {
            // Mocha
            cy.log(str)
            // const namee = 'Hello ' + name + ', share this practice page and share your knowledge'
            // expect(str).to.equal(namee)
        })
        // window:confirm
        cy.on('window:confirm',(str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

})
