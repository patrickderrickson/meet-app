Feature: SHOW/HIDE An Events Details

Scenario: An event element is collapsed by default
    Given user views the main page
    When the user views an event
    Then the event details should be collapsed 

Scenario: User can expand an event to see its details
    Given user finds an event they want to view
    When the user clicks to expand the details
    Then the user should see the details of an event displayed

Scenario: User can collapse an event to hide its details
    Given user is viewing an event
    When the user clicks to collapse the event details
    Then the user should see the details of the event collapsed