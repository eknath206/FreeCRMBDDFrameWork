$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/eclipse-workspace/FreeCrmBDDFrameWork/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM - Create new Contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm---create-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user mouse over on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"\u003cfirstname\u003e\" \u0026 \"\u003clastname\u003e\" \u0026 \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm---create-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm---create-new-contact-scenario;;1"
    },
    {
      "cells": [
        "eknathD",
        "eknathD",
        "Amol",
        "Vaidya",
        "Test Lead"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm---create-new-contact-scenario;;2"
    },
    {
      "cells": [
        "eknathD",
        "eknathD",
        "Varsha",
        "Palav",
        "Manager"
      ],
      "line": 18,
      "id": "free-crm-create-contacts;free-crm---create-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM - Create new Contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm---create-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"eknathD\" and \"eknathD\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user mouse over on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Amol\" \u0026 \"Vaidya\" \u0026 \"Test Lead\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 22661248564,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 838087257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eknathD",
      "offset": 13
    },
    {
      "val": "eknathD",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username1_and_password1(String,String)"
});
formatter.result({
  "duration": 3842818142,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 25871403125,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 6790833,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_mouse_over_on_Contacts_link()"
});
formatter.result({
  "duration": 830046006,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_New_Contact_link()"
});
formatter.result({
  "duration": 2886999228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amol",
      "offset": 13
    },
    {
      "val": "Vaidya",
      "offset": 22
    },
    {
      "val": "Test Lead",
      "offset": 33
    }
  ],
  "location": "LoginStepDefinition.user_enters(String,String,String)"
});
formatter.result({
  "duration": 977867928,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 1690686882,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 871477081,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM - Create new Contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm---create-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"eknathD\" and \"eknathD\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user mouse over on Contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on New Contact link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Varsha\" \u0026 \"Palav\" \u0026 \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 12096082002,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 7955918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "eknathD",
      "offset": 13
    },
    {
      "val": "eknathD",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username1_and_password1(String,String)"
});
formatter.result({
  "duration": 225052636,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 15100012458,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 5668983,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_mouse_over_on_Contacts_link()"
});
formatter.result({
  "duration": 2809971607,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_New_Contact_link()"
});
formatter.result({
  "duration": 2159923905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Varsha",
      "offset": 13
    },
    {
      "val": "Palav",
      "offset": 24
    },
    {
      "val": "Manager",
      "offset": 34
    }
  ],
  "location": "LoginStepDefinition.user_enters(String,String,String)"
});
formatter.result({
  "duration": 335625958,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Save_button()"
});
formatter.result({
  "duration": 1758726620,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 1312276462,
  "status": "passed"
});
});