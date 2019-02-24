Feature: Register into losestudiantes
    As an user I want to register myself within losestudiantes website in order to rate teachers

Scenario Outline: Register alerts with wrong inputs and finally success

  Given I go to losestudiantes home screen
    When I open the register screen
    And I fill with <name> <lastname> <emailup> <selecstudy> <password> <terms>
    And I try to register
    Then I expect to sign up alert <error>
	
	Examples:
      | name               | lastname | emailup               | selecstudy         | password       | terms       | error                                                 |
      |                    |          | misot5@gmail.com      | Bio                | 12345678       | y           | El nombre y apellido son obligatorios                 |
      | ab                 |  ab      | misot5@gmail.com      | Bio                | 12345678       | y           | El nombre y apellido debe tener al menos 3 caracteres |
	  | testname           |  test    |                       | Bio                | 12345678       | y           | Ingresa tu correo                                     |
	  | testname           |  test    | misot5                | Bio                | 12345678       | y           | Ingresa un correo valido                              |
	  | testname           |  test    | misot5@gmail.com      |                    | 12345678       | y           | Debes seleccionar tu pregrado                         |
	  | testname           |  test    | misot5@gmail.com      | Bio                |                | y           | Ingresa una contraseña                                |
	  | testname           |  test    | misot5@gmail.com      | Bio                | 1234           | y           | La contraseña debe ser al menos de 8 caracteres       |
	  | testname           |  test    | misot5@gmail.com      | Bio                | 12345678       |             | Debes aceptar los términos y condiciones              |
	  | testname           |  test    | willigon106@gmail.com | Bio                | 12345678       | y           | Ocurrió un error activando tu                         |
	  | testname           |  test    | misot5okok@gmail.com  | Bio                | 12345678       | y           | Registro exitoso                                      |