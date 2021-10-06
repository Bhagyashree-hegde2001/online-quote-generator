const Quote = document.getElementById("quote");
const Author = document.getElementById("author");



//function to generate the new quote each time
function getQuote(){
    fetch("https://quote-god.herokuapp.com/")
      .then((res) => {return res.json();})
      .then((data => {
        let quoteData = data[Math.floor(Math.random()*data.length)];
        Quote.innerText = quoteData.quote;
        Author.innerText = `-${quoteData.author}`;
      }));       
  }
  getQuote();
