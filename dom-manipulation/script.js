// Quotes array
let quotes = [
    { text: "Stay hungry, stay foolish.", category: "Motivation" },
    { text: "Knowledge is power.", category: "Education" }
  ];
  
  // REQUIRED FUNCTION NAME
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const q = quotes[randomIndex];
  
    const display = document.getElementById("quoteDisplay");
    display.textContent = `${q.text} — (${q.category})`;
  }
  
  // REQUIRED addQuote FUNCTION
  function addQuote() {
    const textInput = document.getElementById("newQuoteText");
    const categoryInput = document.getElementById("newQuoteCategory");
  
    const newText = textInput.value.trim();
    const newCategory = categoryInput.value.trim();
  
    if (newText === "" || newCategory === "") {
      return;
    }
  
    // Add new quote
    quotes.push({
      text: newText,
      category: newCategory
    });
  
    // Update DOM
    const display = document.getElementById("quoteDisplay");
    display.textContent = `${newText} — (${newCategory})`;
  
    // Clear fields
    textInput.value = "";
    categoryInput.value = "";
  }
  
  // REQUIRED EVENT LISTENER
  document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
  
  // Add Quote button listener
  document.getElementById("addQuote").addEventListener("click", addQuote);
  
  // Show default quote
  displayRandomQuote();
  