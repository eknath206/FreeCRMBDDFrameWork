$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/eclipse-workspace/FreeCrmBDDFrameWork/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "eknathD",
        "eknathD"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user mouse over on Deals link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on New Deal link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 33197811600,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 117237660,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 1263077323,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 9236210998,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 8246037,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_mouse_over_on_Deals_link()"
});
formatter.result({
  "duration": 851368234,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_clicks_on_New_Deal_link()"
});
formatter.result({
  "duration": 2149056726,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_deal_details(DataTable)"
});
formatter.result({
  "duration": 816415730,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 1574025466,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.close_browser()"
});
formatter.result({
  "duration": 743009215,
  "status": "passed"
});
});