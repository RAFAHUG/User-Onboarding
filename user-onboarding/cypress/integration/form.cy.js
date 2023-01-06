describe('Test Container', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    
    it('testing thee test', () => {
        expect(true).to.equal(true)
    })

    const nameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password')
    const checkboxInput = () => cy.get('input[name=tos]')
    const submitBtn = () => cy.get('input[type=submit]')

    describe('Testing Inputs', () => {
        
        it('testing if can write inside name input', () => {
            nameInput()
            .type('Rafaela Serrano-Plata')
            .should('have.value', 'Rafaela Serrano-Plata')
        })

        it('testing if can write inside email input', () => {
            emailInput()
            .type('raphaela123@gmail.com')
            .should('have.value', 'raphaela123@gmail.com')
        })

        it('testing if can write inside password input', () => {
            passwordInput()
            .type('2503042575056')
            .should('have.value', '2503042575056')
        })

        it('testing if checkbox can be check', () => {
            checkboxInput().check().should('be.checked')
        })

        it('can submit the form using submit button', () => {
            nameInput().type('Samantha Goodman')
            emailInput().type('samgood@hotmail.com')
            passwordInput().type('123456')
            checkboxInput().check()
            submitBtn()
            .should('not.be.disabled')
            .click()
            cy.contains('samgood@hotmail.com')    
        })

        it('form validation if a input if left empty', () => {
            nameInput().type('Jason')
            passwordInput().type('123456')
            emailInput().type('j@hotmail.com')
            checkboxInput().check()
            emailInput().clear()
            cy.contains('Email is required')
        })

    })
})