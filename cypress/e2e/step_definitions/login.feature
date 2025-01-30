Feature: Login

Scenario: Login com sucesso
    Given que o usuário está na página de login
    When o usuário insere o endereço de e-mail e a senha corretos
    Then o usuário é redirecionado para a página inicial
