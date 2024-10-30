const express = require('express');
const { connect } = require("puppeteer-real-browser");

const app = express();
app.use(express.json()); // For parsing application/json

app.post('/scrape', async (req, res) => {
    const url = req.body.url;
    if (!url) {
        return res.status(400).json({ error: 'Please provide a URL in the request body' });
    }
    try {
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
        await browser.close();
        res.send(html);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during scraping' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Scraper server listening on port ${PORT}`);
});