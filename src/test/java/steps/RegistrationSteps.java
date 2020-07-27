package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.java.StepDefAnnotation;
import io.qameta.allure.*;
import junit.framework.Assert;
import org.testng.asserts.Assertion;
import pages.HomePage;
import pages.UserRegistrationPage;
import tests.TestBase;


public class RegistrationSteps extends TestBase {

    HomePage homeObject ;
    UserRegistrationPage registerObject ;

    @Step@Severity(SeverityLevel.BLOCKER)@Issue("32423")@Epic("345")@Feature("3434")@Issue("32425")
    @Given("^the user in the home pagea$")
    public void theUserInTheHomePagea() {
        homeObject = new HomePage(driver);
        homeObject.openRegistrationPage();
        System.out.println("Navigate to homepage");
    }
    @Step@Severity(SeverityLevel.BLOCKER)@Issue("32423")@Epic("345")@Feature("3434")@Issue("32425")
    @When("^I click on register linka$")
    public void iClickOnRegisterLinka() {
        registerObject = new UserRegistrationPage(driver);
        Assert.assertTrue(registerObject.genderRdoBtn.isDisplayed());
        System.out.println("click on reg link");
    }
    @Step@Severity(SeverityLevel.BLOCKER)@Issue("32423")@Epic("345")@Feature("3434")@Issue("32425")
    @And("^I enteree \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"$")
    public void iEnteree(String firstname, String lastname, String email, String password) {
        registerObject = new UserRegistrationPage(driver);
        registerObject.userRegistration(firstname, lastname,email,password);
        System.out.println("insert valid data");
    }
    @Step@Severity(SeverityLevel.BLOCKER)@Issue("32423")@Epic("345")@Feature("3434")@Issue("32425")
    @Then("^The registration page displayed successfullya$")
    public void theRegistrationPageDisplayedSuccessfullya() {
        registerObject = new UserRegistrationPage(driver);
        assert registerObject.myAccountLink.isDisplayed();
        registerObject.userLogout();
        System.out.println("login success");
    }

    @Given("^the user in the home pageaa$")
    public void theUserInTheHomePageaa() {
        homeObject = new HomePage(driver);
        homeObject.openRegistrationPage();
    }

    @When("^I click on register linkaa$")
    public void iClickOnRegisterLinkaa() {
        registerObject = new UserRegistrationPage(driver);
        Assert.assertTrue(registerObject.genderRdoBtn.isDisplayed());
    }

    @And("^I entereea \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\" , \"([^\"]*)\"$")
    public void iEntereea(String firstname, String lastname, String email, String password) {
        registerObject = new UserRegistrationPage(driver);
        registerObject.userRegistration(firstname, lastname,email,password);
    }

    @Then("^The registration page displayed successfullyaa$")
    public void theRegistrationPageDisplayedSuccessfullyaa() {
        registerObject = new UserRegistrationPage(driver);
        assert registerObject.myAccountLink.isDisplayed();
        registerObject.userLogout();
    }
}
