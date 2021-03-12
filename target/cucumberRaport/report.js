$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createprescription.feature");
formatter.feature({
  "line": 1,
  "name": "Създаване на рецепта",
  "description": "",
  "id": "създаване-на-рецепта",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Създаване на рецепта",
  "description": "",
  "id": "създаване-на-рецепта;създаване-на-рецепта",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителят се намира на прозореца за създаване на рецепта",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Потребителят въведе име на лекуващ лекар \"Dimitar\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Потребителят въведе име на пациента \"Baba Stoyana\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Потребителят въведе днешна дата \"2020-03-08\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Потребителят добавя лекарство \"лекарство1\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Потребителят натиска бутона за създаване на рецепта",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Подскача съобщение \"Рецептата е създадена успешно\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePrescriptionSteps.потребителят_се_намира_на_прозореца_за_създаване_на_рецепта()"
});
formatter.result({
  "duration": 181454000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dimitar",
      "offset": 42
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_име_на_лекуващ_лекар(String)"
});
formatter.result({
  "duration": 2380500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Baba Stoyana",
      "offset": 37
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_име_на_пациента(String)"
});
formatter.result({
  "duration": 67900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-03-08",
      "offset": 33
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_днешна_дата(String)"
});
formatter.result({
  "duration": 138200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "лекарство1",
      "offset": 31
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_добавя_лекарство(String)"
});
formatter.result({
  "duration": 90300,
  "status": "passed"
});
formatter.match({
  "location": "CreatePrescriptionSteps.потребителят_натиска_бутона_за_създаване_на_рецепта()"
});
formatter.result({
  "duration": 1322100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Рецептата е създадена успешно",
      "offset": 20
    }
  ],
  "location": "CreatePrescriptionSteps.подскача_съобщение(String)"
});
formatter.result({
  "duration": 1633500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Създаване на рецепта без да въведе име на лекуващ лекар",
  "description": "",
  "id": "създаване-на-рецепта;създаване-на-рецепта-без-да-въведе-име-на-лекуващ-лекар",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Потребителят се намира на прозореца за създаване на рецепта",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Потребителят въведе име на пациента \"Baba Stoyana\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Потребителят въведе днешна дата \"2020-03-08\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Потребителят добавя лекарство \"лекарство1\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Потребителят натиска бутона за създаване на рецепта",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Подскача съобщение \"Моля, въведете име на лекар\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePrescriptionSteps.потребителят_се_намира_на_прозореца_за_създаване_на_рецепта()"
});
formatter.result({
  "duration": 81300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Baba Stoyana",
      "offset": 37
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_име_на_пациента(String)"
});
formatter.result({
  "duration": 71400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-03-08",
      "offset": 33
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_днешна_дата(String)"
});
formatter.result({
  "duration": 58400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "лекарство1",
      "offset": 31
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_добавя_лекарство(String)"
});
formatter.result({
  "duration": 78200,
  "status": "passed"
});
formatter.match({
  "location": "CreatePrescriptionSteps.потребителят_натиска_бутона_за_създаване_на_рецепта()"
});
formatter.result({
  "duration": 41100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете име на лекар",
      "offset": 20
    }
  ],
  "location": "CreatePrescriptionSteps.подскача_съобщение(String)"
});
formatter.result({
  "duration": 56800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Създаване на рецепта без да въведе име на пациент",
  "description": "",
  "id": "създаване-на-рецепта;създаване-на-рецепта-без-да-въведе-име-на-пациент",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "Потребителят се намира на прозореца за създаване на рецепта",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Потребителят въведе име на лекуващ лекар \"Dimitar\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Потребителят въведе днешна дата \"2020-03-08\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Потребителят добавя лекарство \"лекарство1\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Потребителят натиска бутона за създаване на рецепта",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Подскача съобщение \"Моля, въведете име на пациент\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePrescriptionSteps.потребителят_се_намира_на_прозореца_за_създаване_на_рецепта()"
});
formatter.result({
  "duration": 57200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dimitar",
      "offset": 42
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_име_на_лекуващ_лекар(String)"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-03-08",
      "offset": 33
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_днешна_дата(String)"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "лекарство1",
      "offset": 31
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_добавя_лекарство(String)"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.match({
  "location": "CreatePrescriptionSteps.потребителят_натиска_бутона_за_създаване_на_рецепта()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете име на пациент",
      "offset": 20
    }
  ],
  "location": "CreatePrescriptionSteps.подскача_съобщение(String)"
});
formatter.result({
  "duration": 78000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Създаване на рецепта без да въведе дата",
  "description": "",
  "id": "създаване-на-рецепта;създаване-на-рецепта-без-да-въведе-дата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "Потребителят се намира на прозореца за създаване на рецепта",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Потребителят въведе име на лекуващ лекар \"Dimitar\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Потребителят въведе име на пациента \"Baba Stoyana\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Потребителят добавя лекарство \"лекарство1\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Потребителят натиска бутона за създаване на рецепта",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Подскача съобщение \"Моля, въведете дата\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePrescriptionSteps.потребителят_се_намира_на_прозореца_за_създаване_на_рецепта()"
});
formatter.result({
  "duration": 93600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dimitar",
      "offset": 42
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_име_на_лекуващ_лекар(String)"
});
formatter.result({
  "duration": 48500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Baba Stoyana",
      "offset": 37
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_име_на_пациента(String)"
});
formatter.result({
  "duration": 34800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "лекарство1",
      "offset": 31
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_добавя_лекарство(String)"
});
formatter.result({
  "duration": 48700,
  "status": "passed"
});
formatter.match({
  "location": "CreatePrescriptionSteps.потребителят_натиска_бутона_за_създаване_на_рецепта()"
});
formatter.result({
  "duration": 31500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете дата",
      "offset": 20
    }
  ],
  "location": "CreatePrescriptionSteps.подскача_съобщение(String)"
});
formatter.result({
  "duration": 156000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Създаване на рецепта без да въведе лекарство",
  "description": "",
  "id": "създаване-на-рецепта;създаване-на-рецепта-без-да-въведе-лекарство",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "Потребителят се намира на прозореца за създаване на рецепта",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Потребителят въведе име на лекуващ лекар \"Dimitar\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Потребителят въведе име на пациента \"Baba Stoyana\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Потребителят въведе днешна дата \"2020-03-08\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Потребителят натиска бутона за създаване на рецепта",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Подскача съобщение \"Моля, въведете лекарство\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreatePrescriptionSteps.потребителят_се_намира_на_прозореца_за_създаване_на_рецепта()"
});
formatter.result({
  "duration": 78200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dimitar",
      "offset": 42
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_име_на_лекуващ_лекар(String)"
});
formatter.result({
  "duration": 70500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Baba Stoyana",
      "offset": 37
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_име_на_пациента(String)"
});
formatter.result({
  "duration": 58100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-03-08",
      "offset": 33
    }
  ],
  "location": "CreatePrescriptionSteps.потребителят_въведе_днешна_дата(String)"
});
formatter.result({
  "duration": 55000,
  "status": "passed"
});
formatter.match({
  "location": "CreatePrescriptionSteps.потребителят_натиска_бутона_за_създаване_на_рецепта()"
});
formatter.result({
  "duration": 24800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Моля, въведете лекарство",
      "offset": 20
    }
  ],
  "location": "CreatePrescriptionSteps.подскача_съобщение(String)"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
});