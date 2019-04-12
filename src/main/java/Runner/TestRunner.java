package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//features = "F:\\eclipse-workspace\\FreeCrmBDDFrameWork\\src\\main\\java\\Features\\login.feature",	//path of the feature file
		//features = "F:\\eclipse-workspace\\FreeCrmBDDFrameWork\\src\\main\\java\\Features\\contacts.feature",
		//features = "F:\\eclipse-workspace\\FreeCrmBDDFrameWork\\src\\main\\java\\Features\\deals.feature",
		//features = "F:\\eclipse-workspace\\FreeCrmBDDFrameWork\\src\\main\\java\\Features\\dealsmap.feature",
		features = "F:\\eclipse-workspace\\FreeCrmBDDFrameWork\\src\\main\\java\\Features\\tagging.feature",
		glue = {"stepDefinitions"},	//path of the step definitions file
		format = {"pretty", "html: test-output", "json: json_output/cucumber.json", "junit: junit_xml/cucumber.xml"},//to generate diff. types of reports
		monochrome = true,	//display the console output in proper readable format
		strict = true,	//to check if any step is not defined in step definition file
		dryRun = false,	//	OR dryRun = true; to check mapping proper between feature file & step definition file
		tags = {"~@SmokeTest", "~@RegressionTest", "~@End2End"}
		)

public class TestRunner {

}

// OR: tags = {"@SmokeTest, @RegressionTest"}
//AND: tags = {"@SmokeTest", "@RegressionTest"}
//IGNORE: tags = {"~@SmokeTest", "~@RegressionTest", "~@End2End"}
