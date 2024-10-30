const { connect } = require("puppeteer-real-browser");

async function scrape(url) {
    const { browser, page } = await connect({
        headless: false,
        args: [],
        customConfig: {},
        turnstile: true,
        connectOption: {},
        disableXvfb: false,
        ignoreAllFlags: false
    });
    await page.goto(url);
    await page.waitForTimeout(2000);
    const html = await page.content();
    console.log(html);
    await browser.close();
}

const url = process.argv[2];
if (!url) {
    console.error('Please provide a URL as the first argument');
    process.exit(1);
}
scrape(url);