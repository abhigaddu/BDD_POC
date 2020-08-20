$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the Application",
  "description": "",
  "id": "login-to-the-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to Application",
  "description": "",
  "id": "login-to-the-application;login-to-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Access the url link",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the login details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User will be able to see Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Access menu test data",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.User_Enters_Application_Url()"
});
formatter.result({
  "duration": 5437398900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.User_enters_login_details()"
});
formatter.result({
  "duration": 2335551400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.User_In_Home_Page()"
});
formatter.result({
  "duration": 2029920500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.Access_menu_test_data()"
});
formatter.result({
  "duration": 4356393800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.Logout_from_the_application()"
});
formatter.result({
  "duration": 3635401900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Invalid Login to Application",
  "description": "",
  "id": "login-to-the-application;invalid-login-to-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Access the url link",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters the wrong login details",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User will be redirected back to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.User_Enters_Application_Url()"
});
formatter.result({
  "duration": 3607290000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.User_enters_wrong_login_details()"
});
formatter.result({
  "duration": 2290975200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.User_In_login_Page()"
});
formatter.result({
  "duration": 2792886900,
  "status": "passed"
});
});