import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('que o usuário está na página de login', () => {

  // Abrir o navegador e navegar para a URL
  cy.visit('https://automationexercise.com/');

  // Verificar se a página inicial é exibida com sucesso
  cy.contains('AutomationExercise').should('be.visible')
});  


When('o usuário insere o endereço de e-mail e a senha corretos', () => {
  cy.visit('https://automationexercise.com/');

  // Verificar se a página inicial é exibida com sucesso
  cy.contains('AutomationExercise').should('be.visible')
  
  // Clicar no botão 'Signup / Login'
  cy.contains('Signup / Login').click();

  // Verificar se 'Login to your account' está visível
  cy.contains('Login to your account').should('be.visible');

  // Inserir o endereço de e-mail e a senha corretos
  cy.get('[data-qa="login-email"]').type('QA@email.com');
  cy.get('[data-qa="login-password"]').type('QAFramework');

  // Clicar no botão 'login'
  cy.get('[data-qa="login-button"]').click();
}); 


Then('o usuário é redirecionado para a página inicial', () => {
    // Verificar se 'Logged in as username' está visível
    cy.contains('Logged in as').should('be.visible');
});
