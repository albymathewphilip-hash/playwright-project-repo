/*BDD(Behaviour Driven Development)
BDD in playwright is an approach of writing test in a business readable format
usually using gherking syntax such as given,when,then,etc.
playwright is then used to automate these steps through step difenition

cucumber is an BDD framework or tool,used to write testcase in a simple human readble language called gherking

keywords:-
1.Feature-describe the functionality 
2.Scenario-individual testcase 
3.Given-precondition or initial setup
4.When-action
5.Then-expected result
6.And-additional steps

Folder name:features
file name:login.feature

eg:-
Feature:login functionality
Scenario:login with valid credential
Given:user is on the loginpage
When:user enter username and password
Then:user successfully navigate to homepage\

login.feature
login.feature is a feature file contains test scenario return into BDD format using keyword like features scenario
when,given,then
it is written in sinple english even non-technical user can understand

describe application behaviour: it is explain how login functionality should work

Folder name:step-definitions
file name:login.steps.js

login.steps.js
 login.steps.js is called steps definition file it contain the actual automation code for the each steps written 
inside in the feature file

difference btw login.feature and login.steps.js

login.features                        login.steps.js
contains test scenario                contains automation code
written in english                    written in javascript 
easy for buisiness user               easy for automation test
uses given when,then,etc.             use palywright+cucumber code*/

/*hoops-
hooks are special function used to include for before or after scenario
1.BeforeAll - run only once before all scenarios
2.AfterAll - excecutes hooks one time for after all scenarios are completed
3.Before - this hooks excecutes before each scenario
4.After - this hooks excecutes after each step
5.BeforeStep - this hooks excecutes before every step in a scenario
6.AfterSteps - this hooks excecutes after every step in a scenario*/

/*cucumber tags-tax are used to group an organize text scenario 
they help us execute specific scenarios or feature files instead of running all text cases*/