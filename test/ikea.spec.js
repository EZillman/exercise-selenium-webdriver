const {By, Builder, Browser} = require('selenium-webdriver');
//const assert = require('assert');

describe('Test IKEA', function () {
    let driver;
    
    before(async function () {
        driver = await new Builder().forBrowser(Browser.EDGE).build();
    });

    it('Open IKEAs website in Edge', async function () {
        await driver.get('https://www.ikea.com/se/sv/');
        await driver.manage().setTimeouts({implicit: 500});
    });

    it('Navigate to favourites', async function () {
        let favouritesButton = await driver.findElement(By.xpath('/html/body/header/div/ul/li/a'));
        await favouritesButton.click();
    });

    it('Click on searchfield', async function () {
        let searchfield = await driver.findElement(By.className('search-wrapper'));
        await searchfield.click();
    });

    after(async function () {
        await driver.quit();
    });
});