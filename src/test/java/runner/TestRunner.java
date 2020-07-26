package runner;

import cucumber.api.CucumberOptions;
import tests.TestBase;


@CucumberOptions(features="src/test/java/features/Registration.feature"
,glue= {"steps"}
,plugin= {"pretty","html:target/cucumber-html-report","io.qameta.allure.cucumber4jvm.AllureCucumber4Jvm"})
public class TestRunner extends TestBase
{
	

}
