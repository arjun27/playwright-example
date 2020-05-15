const playwright = require('playwright');

(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[browserType].launch();
    const page = await browser.newPage();

    const userAgent = await page.evaluate(() => navigator.userAgent);
    console.log(`${browserType}: ${userAgent}`);
    await browser.close();
  }
})();