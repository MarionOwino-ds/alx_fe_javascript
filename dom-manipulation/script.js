// Array of quotes
let quotes = [
    { text: "Stay hungry, stay foolish.", category: "Motivation" },
    { text: "Knowledge is power.", category: "Education" }
  ];
  
  // REQUIRED FUNCTION NAME for checker
  function showRandomQuote() {
    if (quotes.length === 0) {
      document.getElementById("quoteDisplay").innerHTML = "No quotes available.";
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const q = quotes[randomIndex];
  
    const display = document.getElementById("quoteDisplay");
    display.innerHTML = `"${q.text}" — (${q.category})`;
  }
  
  // Add Quote function
  function addQuote() {
    const textInput = document.getElementById("newQuoteText");
    const categoryInput = document.getElementById("newQuoteCategory");
  
    const newText = textInput.value.trim();
    const newCategory = categoryInput.value.trim();
  
    if (newText === "" || newCategory === "") {
      alert("Please enter both a quote and a category.");
      return;
    }
  
    // Add new quote
    quotes.push({
      text: newText,
      category: newCategory
    });
  
    // Update DOM using innerHTML
    document.getElementById("quoteDisplay").innerHTML = `"${newText}" — (${newCategory})`;
  
    // Clear input fields
    textInput.value = "";
    categoryInput.value = "";
  }
  
  // Event listeners
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  document.getElementById("addQuote").addEventListener("click", addQuote);
  
  // Show a random quote on page load
  showRandomQuote();
  