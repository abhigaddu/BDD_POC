Feature: Login to the Application

  Background: 
    Given Access the url link

  Scenario: Login to Application
    When User enters the login details
    Then User will not get an error message "Username and password did not match or not found"
    And User will be able to see Home Page
    When Access menu profile
    And Logout from the application
    Then User will be redirected back to login page

  Scenario: Invalid Login to Application
    When User enters the wrong login details
    Then User will be redirected back to login page
    And User will get an error message "Username and password did not match or not found"
