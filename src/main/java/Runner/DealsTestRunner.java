package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "F:\\eclipse-workspace\\FreeCrmBDDFrameWork\\src\\main\\java\\Features\\deals.feature",
		glue = {"DealStepDefinition"},
		format = {"pretty", "html: test-output", "json: json_output/cucumber.json", "junit: junit_xml/cucumber.xml"},
		monochrome = true,
		strict = true,
		dryRun = true
		)

public class DealsTestRunner {

}
