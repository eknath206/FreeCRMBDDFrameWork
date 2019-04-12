Feature: Deal data creation 

Scenario: Free CRM Create a new deal scenario 
	Given user is already on Login page 
	When title of login page is Free CRM 
	Then user enters username and password 
		| usernameCol | passwordCol |
		| eknathD | eknathD |
	Then user clicks on login button 
	Then user is on home page 
	Then user mouse over on Deals link 
	Then user enters deal details 
		| titleCol | amountCol | probabilityCol | commissionCol |
		| test deal1 | 1000 | 50 | 10 |
		| test deal2 | 2000 | 60 | 20 |
		| test deal3 | 3000 | 70 | 30 |
	Then close browser