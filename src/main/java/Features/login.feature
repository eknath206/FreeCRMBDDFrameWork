Feature: Free CRM Login Feature

#Scenario: Free CRM Login Test Scenario
#Given user is already on Login page
#When title of login page is Free CRM
#Then user enters username and password
#Then user clicks on login button
#Then user is on home page
#Then close browser

#Scenario: user is able to create a new contact
#Given user is already on Login page
#Then user enters username and password
#Then user clicks on login button
#Then user is on home page
#Then user mouse over on Contacts link
#Then user clicks on New Contact link
#Then user enters first name & last name
#Then user clicks on Save button
#Then close browser

#Without Examples keyword
#Scenario: Free CRM Login Test Scenario
#Given user is already on Login page
#When title of login page is Free CRM
#Then user enters "eknathD" and "eknathD"
#Then user clicks on login button
#Then user is on home page
#Then close browser

#With Examples keyword
Scenario Outline: Free CRM Login Test Scenario
Given user is already on Login page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then close browser

Examples:
	 | username | password |
	 | eknathD | eknathD |
	 | naveenk| test@123 |