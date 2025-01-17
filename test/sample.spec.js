const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require('assert');

describe('Open Edge', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser(Browser.EDGE).build();
    });

    it('Open samplesite in Edge', async function () {
        await driver.get('https://artoftesting.com/samplesiteforselenium');
    });

    after(async function () {
        await driver.quit();
    });
});

/*
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
*/
