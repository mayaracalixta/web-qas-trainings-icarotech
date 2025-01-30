describe('Fluxo de add itens', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    });

    it('Login com sucesso', () => {

       
        cy.login();
    });

    it('Pesquisar um produto', () => {

   

        cy.login();
        cy.search_product();
    });

    it.only('', () => {
        cy.login();
        cy.search_product();
        cy.get('[data-product-id="1"]').eq(0).click();
        cy.contains('Your product has been added to cart.').should('be.visible');
    });
});


