package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class LoginStepDefinition {
	
	WebDriver driver;
	
	
	@Given("^user is already on Login page$")
	public void user_already_on_login_page() {
		
		System.setProperty("webdriver.chrome.driver", "F:\\JarFiles\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://classic.crmpro.com/");
	}
	
	@SuppressWarnings("deprecation")
	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_free_CRM() {
		String title = driver.getTitle();
		System.out.println("Title is: "+title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	}
	
	@Then("^user enters username and password$")
	public void user_enters_username_and_password(){
		driver.findElement(By.name("username")).sendKeys("eknathD");
		driver.findElement(By.name("password")).sendKeys("eknathD");
	}
	
	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws InterruptedException {
		WebElement loginButton = driver.findElement(By.xpath("//input[@value='Login']"));
/*		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click;", loginButton);*/
		
		WebDriverWait wait = new WebDriverWait(driver, 5);
		boolean invisible = wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("preloader")));
		if(invisible) {
			loginButton.click();
		}
		
	}
	
	@SuppressWarnings("deprecation")
	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		
		String title = driver.getTitle();
		System.out.println("Home page title is: "+title);
		Assert.assertEquals("CRMPRO", title);
	}
	
	@Then("^close browser$")
	public void close_browser() {
		driver.quit();
	}
	
	@Then("^user mouse over on Contacts link$")
	public void user_mouse_over_on_Contacts_link() {
		driver.switchTo().frame("mainpanel");
		
		WebElement contactsLink = driver.findElement(By.xpath("//a[@title='Contacts']"));
	    
	    Actions action = new Actions(driver);
	    action.moveToElement(contactsLink).build().perform();
	}
	
	@Then("^user clicks on New Contact link$")
	public void user_clicks_on_New_Contact_link() {
		WebElement newContactLink = driver.findElement(By.xpath("//a[@title='New Contact']"));
		newContactLink.click();
	}
	
	@Then("^user enters first name & last name$")
	public void user_enters_first_name_last_name() {
	    driver.findElement(By.id("first_name")).sendKeys("Amol");
	    driver.findElement(By.id("surname")).sendKeys("Vaidya");
	}
	
	@Then("^user clicks on Save button$")
	public void user_clicks_on_Save_button() {
		driver.findElement(By.xpath("//input[@value='Save']")).click();
	}
	
}
