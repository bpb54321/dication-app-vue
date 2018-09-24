Feature: Current clip

  Scenario: Current clip has inputs for hour, minute, and seconds for start time
    Given I am on the homepage
    Then there is a start time section
    And it has an hour input
    And it has a minute input
    And it has a second input

  Scenario: Current clip has inputs for hour, minute, and seconds for end time
    Given I am on the homepage
    Then there is an end time section
    And it has an hour input
    And it has a minute input
    And it has a second input