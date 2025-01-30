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


//Cypress.Commands.add('login', (username,password) => {
// Inserir o endereço de e-mail e a senha corretos
//      cy.get('[data-qa="login-email"]').type(username);
//      cy.get('[data-qa="login-password"]').type(password);
//  
// Clicar no botão 'login'
//      cy.get('[data-qa="login-button"]').click();
//  });

// Cypress.Commands.add('login', () => {
//   cy.visit('https://automationexercise.com/');

//   // Verificar se a página inicial é exibida com sucesso
//   cy.contains('AutomationExercise').should('be.visible')

//   // Clicar no botão 'Signup / Login'
//   cy.contains('Signup / Login').click();

//   // Verificar se 'Login to your account' está visível
//   cy.contains('Login to your account').should('be.visible');

//   // Inserir o endereço de e-mail e a senha corretos
//   cy.get('[data-qa="login-email"]').type('QA@email.com');
//   cy.get('[data-qa="login-password"]').type('QAFramework');

//   // Clicar no botão 'login'
//   cy.get('[data-qa="login-button"]').click();

//   // Verificar se 'Logged in as username' está visível
//   cy.contains('Logged in as').should('be.visible');
// });

// Cypress.Commands.add('search_product', () => {
//   cy.contains('Products').click();
//   cy.get('#search_product').type('Blue Top');
//   cy.get('#submit_search').click();
//   cy.get('h2').contains('Rs. 500');
// });

Cypress.Commands.add('login',() => {
    
    cy.contains('Automation').should('be.visible')
    // Clicar no botão 'Signup / Login'

    cy.contains('Signup / Login').click();
    // Verificar se 'Login to your account' está visível
    cy.contains('Login to your account').should('be.visible');
    // Inserir o endereço de e-mail e a senha corretos
    // Clicar no botão 'login'
    cy.fixture('login.json').then((data) => {
        cy.get(data.elements["username"]).type(data.inputs["username"]);
        cy.get(data.elements["password"]).type(data.inputs["password"]);
    });
    
    
   
   
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as').should('be.visible');
});

Cypress.Commands.add('search_product',() => {
    
    cy.contains('Products').click();
    
    cy.fixture('login.json').then((data) => {
        cy.get('#search_product').type(data.inputs["info"]);
    });    
    
    
    cy.get('#submit_search').click();
    cy.get('h2').contains('Rs. 500');  
});  
