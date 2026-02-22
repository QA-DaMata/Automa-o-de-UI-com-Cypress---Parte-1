Feature: Autenticação

    Scenario Outline: Login de usuário
        Given que estou na página inicial
        When eu faço o login com o usuario "cliente@ebac.art.br" e a senha "GD*peToHNJ1#c$sgk08EaYJQ"
        Then o nome do usuário deve aparecer na pagina de perfil
    Example:
            | email               | senha                    |
            | cliente@ebac.art.br | GD*peToHNJ1#c$sgk08EaYJQ |