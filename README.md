FEATURE 1: FILTER EVENTS BY CITY
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events
Scenario 2: User should see a list of suggestions when they search for a city.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed
Scenario 3: User can select a city from the suggested list.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city
FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
Scenario 1: An event element is collapsed by default.
Given user views the main page
When the user views an event
Then the event details should be collapsed 
Scenario 2: User can expand an event to see its details.
Given user finds an event they want to view
When the user clicks to expand the details
Then the user should see the details of an event displayed
Scenario 3: User can collapse an event to hide its details.
Given user is viewing an event
When the user clicks to collapse the event details
Then the user should see the details of the event collapsed
FEATURE 3: SPECIFY NUMBER OF EVENTS
Scenario 1: When user hasn’t specified a number, 32 is the default number.
Given user opens the website
When the user doesn’t edit the specified number
Then the user should see a list of 32 events
Scenario 2: User can change the number of events they want to see.
Given user opens the web page
When the user edits the amount of events to view
Then the user should see a new list of events with the specified number.
FEATURE 4: USE THE APP WHEN OFFLINE
Scenario 1: Show cached data when there’s no internet connection.
Given user is viewing the website
When the user does not have internet connection 
Then the user should still see the cached events
Scenario 2: Show error when user changes the settings (city, time range).
Given user is viewing the web page without an internet connection
When the user attempts to adjust the event settings
Then the user should see an error
FEATURE 5: DATA VISUALIZATION
Scenario 1: Show a chart with the number of upcoming events in each city.

Given user loads the main web page
When the user scrolls down the page
Then the user should see a chart with upcoming events


