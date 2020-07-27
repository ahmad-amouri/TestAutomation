$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Registration.feature");
formatter.feature({
  "line": 1,
  "name": "User Registration",
  "description": "I want to check that the user can register in our e-commerce website.",
  "id": "user-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User Registrationa1",
  "description": "",
  "id": "user-registration;user-registrationa1",
  "type": "scenario_outline",
  "keyword": "Scenario Template"
});
formatter.step({
  "line": 5,
  "name": "the user in the home pagea",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register linka",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enteree \"\u003cfirstname\u003e\" , \"\u003clastname\u003e\" , \"\u003cemail\u003e\" , \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "The registration page displayed successfullya",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "user-registration;user-registrationa1;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password"
      ],
      "line": 11,
      "id": "user-registration;user-registrationa1;;1"
    },
    {
      "cells": [
        "ahmed",
        "mohamed",
        "ahmad77777@gmail.com",
        "12345678"
      ],
      "line": 12,
      "id": "user-registration;user-registrationa1;;2"
    },
    {
      "cells": [
        "ahmed",
        "mohamed",
        "ahmad8888@8gmail.com",
        "12345678"
      ],
      "line": 13,
      "id": "user-registration;user-registrationa1;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "User Registrationa1",
  "description": "",
  "id": "user-registration;user-registrationa1;;2",
  "type": "scenario",
  "keyword": "Scenario Template"
});
formatter.step({
  "line": 5,
  "name": "the user in the home pagea",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register linka",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enteree \"ahmed\" , \"mohamed\" , \"ahmad77777@gmail.com\" , \"12345678\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "The registration page displayed successfullya",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.theUserInTheHomePagea()"
});
formatter.result({
  "duration": 3602399910,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLinka()"
});
formatter.result({
  "duration": 80544064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ahmed",
      "offset": 11
    },
    {
      "val": "mohamed",
      "offset": 21
    },
    {
      "val": "ahmad77777@gmail.com",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "RegistrationSteps.iEnteree(String,String,String,String)"
});
formatter.result({
  "duration": 2897087575,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.theRegistrationPageDisplayedSuccessfullya()"
});
formatter.result({
  "duration": 2818583524,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Registrationa1",
  "description": "",
  "id": "user-registration;user-registrationa1;;3",
  "type": "scenario",
  "keyword": "Scenario Template"
});
formatter.step({
  "line": 5,
  "name": "the user in the home pagea",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register linka",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enteree \"ahmed\" , \"mohamed\" , \"ahmad8888@8gmail.com\" , \"12345678\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "The registration page displayed successfullya",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.theUserInTheHomePagea()"
});
formatter.result({
  "duration": 1513535474,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLinka()"
});
formatter.result({
  "duration": 48447309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ahmed",
      "offset": 11
    },
    {
      "val": "mohamed",
      "offset": 21
    },
    {
      "val": "ahmad8888@8gmail.com",
      "offset": 33
    },
    {
      "val": "12345678",
      "offset": 58
    }
  ],
  "location": "RegistrationSteps.iEnteree(String,String,String,String)"
});
formatter.result({
  "duration": 1879055642,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.theRegistrationPageDisplayedSuccessfullya()"
});
formatter.result({
  "duration": 1042310833,
  "status": "passed"
});
});