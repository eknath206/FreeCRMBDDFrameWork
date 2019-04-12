Feature: Deal data creation 

Scenario: Free CRM Create a new deal scenario 
	Given user is already on Login page 
	When title of login page is Free CRM 
	Then user enters username and password 
		| eknathD | eknathD |
	Then user clicks on login button 
	Then user is on home page 
	Then user mouse over on Deals link 
	Then user clicks on New Deal link 
	Then user enters deal details 
		| test deal | 1000 | 50 | 10 |
	Then user clicks on Save button 
	Then close browser