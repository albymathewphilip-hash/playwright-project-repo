Feature:login functionality

@Smoke
Scenario:login with valid credentials
Given user is on the login page
When user enter valid username and password
Then should be logged in