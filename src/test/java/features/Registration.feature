Feature: User Registration
  I want to check that the user can register in our e-commerce website.

  Scenario Template: User Registrationa1
    Given the user in the home pagea
    When I click on register linka
    And I enteree "<firstname>" , "<lastname>" , "<email>" , "<password>"
    Then The registration page displayed successfullya

    Examples:
      | firstname | lastname | email | password |
      | ahmed | mohamed | ahmad71111@gmail.com | 12345678 |
      | ahmed | mohamed | ahmad81111@gmail.com | 12345678 |
  @scenario2
  Scenario Template: User Registrationa2
    Given the user in the home pageaa
    When I click on register linkaa
    And I entereea "<firstname>" , "<lastname>" , "<email>" , "<password>"
    Then The registration page displayed successfullyaa

    Examples:
      | firstname | lastname | email | password |
      | ahmed | mohamed | ahmad91111@gmail.com | 12345678 |
      | ahmed | mohamed | ahmad101111@gmail.com | 12345678 |
