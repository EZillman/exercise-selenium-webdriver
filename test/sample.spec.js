const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require('assert');

(async function test() {
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.EDGE).build();
        await driver.get('https://artoftesting.com/samplesiteforselenium');

    } catch (error) {
        console.log(error);
    } finally {
        await driver.quit();
    }
}())
