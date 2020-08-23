$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to the Application",
  "description": "",
  "id": "login-to-the-application",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Access the url link",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep2.User_Enters_Application_Url()"
});
formatter.result({
  "duration": 35310804700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Login to Application",
  "description": "",
  "id": "login-to-the-application;login-to-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User enters the login details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User will not get an error message \"Username and password did not match or not found\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User will be able to see Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Access menu profile",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Logout from the application",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User will be redirected back to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep2.User_enters_login_details()"
});
formatter.result({
  "duration": 14222833500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " not ",
      "offset": 9
    },
    {
      "val": "Username and password did not match or not found",
      "offset": 36
    }
  ],
  "location": "LoginStep2.User_Will_Get_Error_Message(String,String)"
});
formatter.result({
  "duration": 2568140100,
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SAIKAT-PC\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {adbPort: 15003, appActivity: tsel.www.myapplication.Main..., appPackage: tsel.www.myapplication, chromedriverChromeMappingFile: /root/.testobject_devices/w..., chromedriverExecutableDir: /root/.testobject_devices/w..., chromedriverPorts: [[26030, 26040]], databaseEnabled: false, desired: {adbPort: 15003, appActivity: tsel.www.myapplication.Main..., appPackage: tsel.www.myapplication, chromedriverChromeMappingFile: /root/.testobject_devices/w..., chromedriverExecutableDir: /root/.testobject_devices/w..., chromedriverPorts: [[26030, 26040]], deviceName: Samsung_Galaxy_S9_free, platform: ANDROID, platformName: Android, suppressKillServer: true, systemPort: 8203, testobject_device: Samsung Galaxy S9, testobject_platform_name: Android, version: }, deviceApiLevel: 29, deviceContextId: 7bb0e632-23be-4c6e-9cdb-e36..., deviceManufacturer: samsung, deviceModel: SM-G960U1, deviceName: 10.101.64.26:16016, deviceScreenDensity: 640, deviceScreenSize: 1440x2960, deviceUDID: 10.101.64.26:16016, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 4, platform: ANDROID, platformName: Android, platformVersion: 10, statBarHeight: 96, suppressKillServer: true, systemPort: 8203, takesScreenshot: true, testobject_device: Samsung_Galaxy_S9_free, testobject_device_name: Samsung Galaxy S9, testobject_device_session_id: bb77ab1f-408f-4774-ac11-824..., testobject_platform_name: Android, testobject_project_id: saucelabs-default, testobject_test_report_api_url: https://api.us-west-1.sauce..., testobject_test_report_id: 3, testobject_test_report_url: https://app.saucelabs.com/t..., testobject_user_id: saikat1500, version: , viewportRect: {height: 2672, left: 0, top: 96, width: 1440}, warnings: {}, webStorageEnabled: false}\nSession ID: 68d03033-5cd3-47c3-bcf2-cbc3d6b265ab\n*** Element info: {Using\u003did, value\u003dtsel.www.myapplication:id/textError}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\r\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\r\n\tat stepDefinitions.LoginStep2.User_Will_Get_Error_Message(LoginStep2.java:78)\r\n\tat ✽.Then User will not get an error message \"Username and password did not match or not found\"(src/main/java/Feature/login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep2.User_In_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep2.Access_menu_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep2.Logout_from_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep2.User_In_login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Access the url link",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStep2.User_Enters_Application_Url()"
});
formatter.result({
  "duration": 140178620200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Invalid Login to Application",
  "description": "",
  "id": "login-to-the-application;invalid-login-to-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User enters the wrong login details",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User will be redirected back to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User will get an error message \"Username and password did not match or not found\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStep2.User_enters_wrong_login_details()"
});
formatter.result({
  "duration": 15598976000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep2.User_In_login_Page()"
});
formatter.result({
  "duration": 5256067900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " ",
      "offset": 9
    },
    {
      "val": "Username and password did not match or not found",
      "offset": 32
    }
  ],
  "location": "LoginStep2.User_Will_Get_Error_Message(String,String)"
});
formatter.result({
  "duration": 3395639000,
  "status": "passed"
});
});