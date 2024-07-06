const { By, Key, until } = require("selenium-webdriver");
const { When, Then, Before, After, Given } = require("@cucumber/cucumber");
const { expect } = require("chai");
const { initDriver } = require("../support/driverUtil");
const { setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(60 * 1000);

let sum = 0;
let driver;
Before(async () => {
  driver = initDriver();
});

After(async () => {
  await driver.quit();
});

When("I add {int} and {int}", function (num1, num2) {
  sum = num1 + num2;
});

Then("The result shoud be {int}", function (result) {
  expect(sum).equal(result);
});

Given("I visit google homepage", async () => {
  await driver.get("https://www.google.com/ncr");
});

When("I search for Techverito", async () => {
  await driver.findElement(By.id("W0wltc")).click();
  await driver.findElement(By.name("q")).sendKeys("Techverito", Key.RETURN);
  await driver.wait(until.titleIs("Techverito - Google Search"), 1000);
});

Then("I Should see the results", async () => {});
