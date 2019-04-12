package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//features = "F:\\eclipse-workspace\\FreeCrmBDDFrameWork\\src\\main\\java\\Features\\login.feature",	//path of the feature file
		//features = "F:\\eclipse-workspace\\FreeCrmBDDFrameWork\\src\\main\\java\\Features\\contacts.feature",
		features = "F:\\eclipse-workspace\\FreeCrmBDDFrameWork\\src\\main\\java\\Features\\deals.feature",
		glue = {"stepDefinitions"},	//path of the step definitions file
		format = {"pretty", "html: test-output", "json: json_output/cucumber.json", "junit: junit_xml/cucumber.xml"},//to generate diff. types of reports
		monochrome = true,	//display the console output in proper readable format
		strict = true,	//to check if any step is not defined in step definition file
		dryRun = false	//	OR dryRun = true; to check mapping proper between feature file & step definition file
		)

public class TestRunner {

}
