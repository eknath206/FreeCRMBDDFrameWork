Feature: Free CRM Create Contacts

Scenario Outline: Free CRM - Create new Contact scenario
Given user is already on Login page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user mouse over on Contacts link
Then user clicks on New Contact link
Then user enters "<firstname>" & "<lastname>" & "<position>"
Then user clicks on Save button
Then close browser

Examples:
	| username | password | firstname | lastname | position |
	| eknathD | eknathD | Amol | Vaidya | Test Lead |
	| eknathD | eknathD | Varsha | Palav | Manager |
