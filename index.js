const { webkit } = require('playwright');

(async() => {
    const browser = await webkit.launch();
    const page = await browser.newPage();
    console.log(await page.evaluate(() => navigator.userAgent));
    await browser.close();
})();