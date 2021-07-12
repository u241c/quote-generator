const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new quote
function newQuote() {
    // Pick a randon quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if Author field is blank and replace it with 'unknown'
    if (!quote.author){
    authorText.textContent = 'unknown';
}else{
    authorText.textContent = quote.author;
}
// check Quote length to detemine styling
if (quote.text.length > 150){
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}
    quoteText.textContent = quote.text;
}

// get quotes from API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error){
        // catch Error Here
    }
}
// on load
getQuotes();