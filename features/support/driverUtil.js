const webdriver = require("selenium-webdriver");

exports.initDriver = () => {
  driver = new webdriver.Builder().forBrowser(webdriver.Browser.CHROME).build();

  return driver;
};
