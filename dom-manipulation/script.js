// Quotes array
let quotes = [
    { text: "Stay hungry, stay foolish.", category: "Motivation" },
    { text: "Knowledge is power.", category: "Education" }
  ];
  
  // REQUIRED FUNCTION 1
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const q = quotes[randomIndex];
  
    const display = document.getElementById("quoteDisplay");
    display.textContent = `${q.text} — (${q.category})`;
  }
  
  // REQUIRED FUNCTION 2
  function addQuote() {
    const textInput = document.getElementById("newQuoteText");
    const categoryInput = document.getElementById("newQuoteCategory");
  
    const newText = textInput.value.trim();
    const newCategory = categoryInput.value.trim();
  
    if (newText === "" || newCategory === "") {
      return;
    }
  
    // REQUIRED: logic to add a new quote to array
    quotes.push({
      text: newText,
      category: newCategory
    });
  
    // REQUIRED: update DOM immediately
    const display = document.getElementById("quoteDisplay");
    display.textContent = `${newText} — (${newCategory})`;
  
    // Clear fields
    textInput.value = "";
    categoryInput.value = "";
  }
  
  // REQUIRED EVENT LISTENER 1
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  
  // REQUIRED EVENT LISTENER 2
  document.getElementById("addQuote").addEventListener("click", addQuote);
  
  // Initial load
  showRandomQuote();
  