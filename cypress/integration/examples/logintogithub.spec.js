describe('login to github', () => {
    it('Visits the github website', () => {

        cy.visit('https://www.Github.com/');
        cy.get('.Button-label > :nth-child(2)').click();
        cy.get('.mr-lg-3 > .HeaderMenu-link').click();
        cy.get('#login_field').type('Prashanthacharya1818');
        cy.get('#password').type('prashanthacharya@1818')
        // https://on.cypress.io/clear
          .should('have.value', 'prashanthacharya@1818')
          .clear()
          .should('have.value', '');
        cy.get('#password').type('Prashanthacharya@1818');
        cy.wait(3000);
        cy.get('.btn').click();
        cy.wait(3000);
        cy.contains('Show more').click();
        cy.contains('rushireddy143/cypress').click();
        cy.wait(3000);
        //cy.contains('cypress').click();
        //cy.get('.navigation-focus > .col-md-2 > .css-truncate > .js-navigation-open').click();
        cy.get(':nth-child(3) > .col-md-2 > .css-truncate > .js-navigation-open').click();
        cy.contains('integration').click();
        cy.wait(3000);
        //cy.contains('e2e').click();
        cy.get('#folder-row-1 > .react-directory-row-name-cell-large-screen > .react-directory-filename-column > .overflow-hidden > h3 > .react-directory-truncate > .Link--primary').click();
        cy.wait(3000);
        //cy.contains('first-test.spec.js').click();
        cy.get('.react-directory-commit-message > .Link--secondary').click();
        cy.get('#actions-tab').click(); 
        cy.get('#projects-tab').click();
        //cy.get('#wiki-tab').click();
        //cy.get('.position-relative > .form-control').type('cypress.yml');
        
       });        
});