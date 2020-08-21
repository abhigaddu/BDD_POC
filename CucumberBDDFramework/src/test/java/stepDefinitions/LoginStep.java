package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	WebDriver driver;

	@Given("^Access the url link$")
	public void User_Enters_Application_Url() {
		String path = System.getProperty("user.dir");
		System.out.println(path);

		System.setProperty("webdriver.gecko.driver", path + "/geckodriver.exe");
		ProfilesIni profile = new ProfilesIni();
		FirefoxProfile myprofile = profile.getProfile("rust_mozprofile");
		DesiredCapabilities cap = DesiredCapabilities.firefox();
		cap.setCapability("marionette", true);
		// driver=new ChromeDriver();
		driver = new FirefoxDriver(cap);
		
		
		Capabilities caps = ((RemoteWebDriver) driver).getCapabilities();
		
		String browserName = caps.getBrowserName();
		String browserVersion = caps.getVersion();
		System.out.println(browserName + " " + browserVersion);
		driver.manage().window().maximize();

		driver.get("https://172.31.22.231/itqapoc/home");

		
	}

	@When("^User enters the login details$")
	public void User_enters_login_details() throws InterruptedException {
		driver.findElement(By.id("username")).sendKeys("administrator");
		driver.findElement(By.id("password")).sendKeys("password");
		Thread.sleep(2000);
		driver.findElement(By.name("submit")).click();
	}

	@When("^User enters the wrong login details$")
	public void User_enters_wrong_login_details() throws InterruptedException {
		driver.findElement(By.id("username")).sendKeys("admin");
		driver.findElement(By.id("password")).sendKeys("pass");
		Thread.sleep(2000);
		driver.findElement(By.name("submit")).click();
	}

	@Then("^User will be redirected back to login page$")
	public void User_In_login_Page() throws InterruptedException {
		Thread.sleep(2000);
		String dashboard = driver.findElement(By.name("submit")).getAttribute("value");
		Assert.assertEquals("Login", dashboard);
		driver.close();

	}

	@Then("^User will be able to see Home Page$")
	public void User_In_Home_Page() throws InterruptedException {
		Thread.sleep(2000);
		String dashboard = driver.findElement(By.xpath("//h6[contains(text(),'Dashboard')]")).getText();
		Assert.assertEquals("Dashboard", dashboard);

	}

	@Then("^Access menu test data$")
	public void Access_menu_test_data() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//span[contains(text(),'Test Data Management')]")).click();
		Thread.sleep(2000);
		String reservation_Id = driver.findElement(By.xpath("//th[contains(text(),'RESERVATION_ID')]")).getText();
		Assert.assertEquals("RESERVATION_ID", reservation_Id);

	}

	@Then("^Logout from the application$")
	public void Logout_from_the_application() throws InterruptedException {
		driver.findElement(By.xpath("//img[contains(@src,'1.jpg')]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[contains(text(),'Logout')]")).click();
		driver.close();
	}

}
