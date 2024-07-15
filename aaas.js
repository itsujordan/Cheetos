const pastebinRawUrl = 'https://pastebin.com/raw/RatxgKnL';

async function fetchTextFromPastebin() {
    try {
        const response = await fetch(pastebinRawUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const text = await response.text();
        const textContainer = document.getElementById('textContainer');
        textContainer.textContent = text;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchTextFromPastebin();