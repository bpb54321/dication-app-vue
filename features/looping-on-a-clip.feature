Feature: Looping on a clip

  Scenario: I press play
    Given I have loaded a media item
    When I press the "start-stop-looping" button
    Then the app plays the clip