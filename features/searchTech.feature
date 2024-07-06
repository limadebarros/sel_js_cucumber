Feature: Search Techverito

  Scenario: Search Techverito on google
    Given I visit google homepage
    When I search for Techverito
    Then I Should see the results