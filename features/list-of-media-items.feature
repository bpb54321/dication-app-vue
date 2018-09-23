Feature: List of media items

  Scenario: The app homepage shows a list of media items
    Given I have a list of media items
    When I load the homepage
    Then I see a list of media items

  Scenario: I click on a media item and it gets loaded in the app
    Given I have a list of media items
    And I am on the homepage
    When I click on a media item
    Then its content and data gets loaded in the app
