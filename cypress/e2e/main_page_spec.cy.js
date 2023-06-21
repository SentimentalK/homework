describe('Cypress.io home page testing', () => {

    beforeEach(() => {
        cy.visit('https://www.cypress.io/');
        cy.contains('p', "With Cypress, you can easily create tests").should('be.visible');
    });

    it('scroll to h2 header', () => {
        cy.contains('h2', "Loved by OSS")
            .scrollIntoView({ offset: { top: -300 } })
            .should('be.visible');
        cy.contains('div', 'Weekly downloads').should('be.visible');
    });

    it('clicking on about cypress', () => {
        cy.get('#dropdownCompany').parent()
            .trigger('mouseover')
        // const mouseoverEvent = new Event('mouseover');
        // document.querySelector('#dropdownCompany').parentElement.dispatchEvent(mouseoverEvent);
        cy.contains('span', "About Cypress")
            .should('be.visible').click();
        cy.contains('h1', "About us").should('be.visible')
    })

    it('clicking "npm install cypress" button', () => {
        cy.contains('button', "npm install cypress")
            .should('be.visible').click();
        cy.get('button[data-cy="modal-install-copy"]')
            .should('be.visible').click();
        cy.window().then((win) => {
            win.navigator.clipboard.readText().then(text => {
                expect(text).to.eq('npm install cypress --save-dev')
            })
        });
    })

    it('clicking on Product > visual review', () => {
        cy.get('#dropdownProduct').parent().trigger('mouseover')
        cy.contains('span', "Visual Reviews")
            .should('be.visible').click();
        cy.contains('h2', "Review and debug failures visually").should('be.visible')
    })

    it('clicking on Product > Test Analytics', () => {
        cy.get('#dropdownProduct').parent().trigger('mouseover')
        cy.contains('span', "Test Analytics").should('be.visible').click();
        cy.contains('h2', "Gain actionable insights into your test suite")
            .scrollIntoView({ offset: { top: -300 } }).should('be.visible')
        // the green circle class is border-jade-200
        cy.get('a[href="#test_analytics"]').should('have.class', 'border-jade-200')
    })

});


