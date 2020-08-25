Feature: Login to the Application

Scenario: Login to Application

Given Access the url link
When User enters the login details
Then User will be able to see Home Page
Then Access menu test data
Then Logout from the application

Scenario: Invalid Login to Application
Given Access the url link
When User enters the wrong login details
Then User will be redirected back to login page

Scenario: Invalid Server Address
Given Wrong Server Address
When Page redirects
Then Validate Server address is wrong

