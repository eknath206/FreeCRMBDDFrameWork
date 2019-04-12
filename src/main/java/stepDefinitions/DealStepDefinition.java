package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class DealStepDefinition {

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
		System.out.println("Title is: " + title);
		Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws InterruptedException {
		WebElement loginButton = driver.findElement(By.xpath("//input[@value='Login']"));

		WebDriverWait wait = new WebDriverWait(driver, 5);
		boolean invisible = wait.until(ExpectedConditions.invisibilityOfElementLocated(By.id("preloader")));
		if (invisible) {
			loginButton.click();
		}
	}

	@SuppressWarnings("deprecation")
	@Then("^user is on home page$")
	public void user_is_on_home_page() {

		String title = driver.getTitle();
		System.out.println("Home page title is: " + title);
		Assert.assertEquals("CRMPRO", title);
	}

	@Then("^user mouse over on Deals link$")
	public void user_mouse_over_on_Deals_link() {

		driver.switchTo().frame("mainpanel");
		WebElement dealsLink = driver.findElement(By.xpath("//a[@title='Deals']"));

		Actions action = new Actions(driver);
		action.moveToElement(dealsLink).build().perform();

	}

	@Then("^user clicks on New Deal link$")
	public void user_clicks_on_New_Deal_link() {
		WebElement newDealLink = driver.findElement(By.xpath("//a[@title='New Deal']"));
		newDealLink.click();
	}

	@Then("^user enters deal details$")
	public void user_enters_deal_details(DataTable dealData) {
		List<List<String>> dealValues = dealData.raw();
		driver.findElement(By.id("title")).sendKeys(dealValues.get(0).get(0));
		driver.findElement(By.id("amount")).sendKeys(dealValues.get(0).get(1));
		driver.findElement(By.id("probability")).sendKeys(dealValues.get(0).get(2));
		driver.findElement(By.id("commission")).sendKeys(dealValues.get(0).get(3));

	}

	@Then("^user clicks on Save button$")
	public void user_clicks_on_Save_button() {
		driver.findElement(By.xpath("//input[@value='Save']")).click();
	}

	@Then("^close browser$")
	public void close_browser() {
		driver.quit();
	}
}
