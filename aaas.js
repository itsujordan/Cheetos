const express = require('express');
const fetch = require('node-fetch');
const app = express();

const pastebinRawUrl = 'https://pastebin.com/raw/RatxgKnL'; // Replace with your Pastebin URL

app.get('/fetch-text', async (req, res) => {
    try {
        const response = await fetch(pastebinRawUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const text = await response.text();
        res.send(text);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
