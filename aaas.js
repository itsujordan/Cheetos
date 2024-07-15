// Define the Pastebin raw file URL
const pastebinRawUrl = 'https://cors-anywhere.herokuapp.com/https://pastebin.com/raw/RatxgKnL';

async function fetchTextFromPastebin() {
   try {
       const response = await fetch(pastebinRawUrl);
       if (!response.ok) {
           throw new Error('Network response was not ok');
       }
       const text = await response.text();
       // Update the HTML content with the fetched text
       const textContainer = document.getElementById('textContainer');
       textContainer.textContent = text;
   } catch (error) {
       console.error('Error fetching data:', error);
   }
}

// Call the function to fetch and display text
fetchTextFromPastebin();
