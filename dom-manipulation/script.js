// required quotes array
let quotes = [
    { text: "Stay hungry, stay foolish.", category: "Motivation" },
    { text: "Simplicity is the ultimate sophistication.", category: "Design" }
  ];
  
  // REQUIRED function name
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteObj = quotes[randomIndex];
  
    const display = document.getElementById("quoteDisplay");
    display.innerHTML = `
      <p>${quoteObj.text}</p>
      <p><em>Category: ${quoteObj.category}</em></p>
    `;
  }
  
  // REQUIRED: addQuote function must be GLOBAL
  function addQuote() {
    const text = document.getElementById("newQuoteText").value.trim();
    const category = document.getElementById("newQuoteCategory").value.trim();
  
    if (text === "" || category === "") return;
  
    // Add to array
    quotes.push({ text: text, category: category });
  
    // Update DOM immediately
    const display = document.getElementById("quoteDisplay");
    display.innerHTML = `
      <p>${text}</p>
      <p><em>Category: ${category}</em></p>
    `;
  
    // Clear inputs
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
  }
  
  // REQUIRED: event listener for Show New Quote button
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  
  // REQUIRED: event listener for Add Quote button
  document.getElementById("addQuote").addEventListener("click", addQuote);
  
  // show default quote on load
  showRandomQuote();
  