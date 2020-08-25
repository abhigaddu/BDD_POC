package stepDefinitions;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.apache.commons.io.FileUtils;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	WebDriver driver;
	
	public void Capture_Screenshot(String filename) throws IOException
	{
		TakesScreenshot scrShot =((TakesScreenshot)driver);
		File SrcFile=scrShot.getScreenshotAs(OutputType.FILE);
		String path = System.getProperty("user.dir");
		String storepath= path+"/target/"+ filename;
        File DestFile=new File(storepath);
        FileUtils.copyFile(SrcFile, DestFile);
	}

	@Given("^Access the url link \"(.*)\"$")
	public void User_Enters_Application_Url(String url) {
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

		driver.get(url);

		
	}
	
	@Given("^Wrong Server Address \"(.*)\"$")
	public void Wrong_Server_Address(String url) {
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
		try
		{
			driver.get(url);
		}
		catch(Exception e)
		{
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		}
		

		
	}

	@When("^User enters the login details \"(.*)\" \"(.*)\"$")
	public void User_enters_login_details(String username,String password) throws InterruptedException {
		driver.findElement(By.id("username")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
		Thread.sleep(2000);
		driver.findElement(By.name("submit")).click();
	}
	
	@When("^Page redirects$")
	public void Page_redirects() throws InterruptedException {
		Thread.sleep(5000);
	}

	@When("^User enters the wrong login details \"(.*)\" \"(.*)\"$")
	public void User_enters_wrong_login_details(String username,String password) throws InterruptedException {
		driver.findElement(By.id("username")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
		Thread.sleep(2000);
		driver.findElement(By.name("submit")).click();
	}

	@Then("^User will be redirected back to login page$")
	public void User_In_login_Page() throws InterruptedException, IOException {
		Thread.sleep(2000);
		Capture_Screenshot("redirect_login_page.jpg");
		String dashboard = driver.findElement(By.name("submit")).getAttribute("value");
		Assert.assertEquals("Login", dashboard);
		driver.close();

	}

	@Then("^User will be able to see Home Page$")
	public void User_In_Home_Page() throws InterruptedException, IOException {
		Thread.sleep(2000);
		Capture_Screenshot("homepage.jpg");
		String dashboard = driver.findElement(By.xpath("//h6[contains(text(),'Dashboard')]")).getText();
		Assert.assertEquals("Dashboard", dashboard);

	}
	
	@Then("^Validate Server address is wrong$")
	public void Validate_Server_address_is_wrong() throws InterruptedException, IOException {
		Thread.sleep(2000);
		try
		{
		WebElement ele=driver.findElement(By.id("username"));
		Assert.assertNull(ele);
		Capture_Screenshot("invalid_server.jpg");
		driver.close();
		}
		catch(Exception e)
		{
			Capture_Screenshot("invalid_server.jpg");
			driver.close();
			
		}
		

	}
	

	@Then("^Access menu test data$")
	public void Access_menu_test_data() throws InterruptedException, IOException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//span[contains(text(),'Test Data Management')]")).click();
		Thread.sleep(2000);
		Capture_Screenshot("test_data.jpg");
		String reservation_Id = driver.findElement(By.xpath("//th[contains(text(),'RESERVATION_ID')]")).getText();
		Assert.assertEquals("RESERVATION_ID", reservation_Id);

	}

	@Then("^Logout from the application$")
	public void Logout_from_the_application() throws InterruptedException, IOException {
		driver.findElement(By.xpath("//img[contains(@src,'1.jpg')]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//a[contains(text(),'Logout')]")).click();
		Thread.sleep(2000);
		Capture_Screenshot("logout.jpg");
		driver.close();
	}

}
