FEATURE: SPECIFY NUMBER OF EVENTS

Scenario: When user hasn’t specified a number, 32 is the default number.
Given user opens the website
When the user doesn’t edit the specified number
Then the user should see a list of 32 events

Scenario: User can change the number of events they want to see.
Given user opens the web page
When the user edits the amount of events to view
Then the user should see a new list of events with the specified number.