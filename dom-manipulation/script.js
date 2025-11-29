// Array of quotes
let quotes = [
    { text: "Stay hungry, stay foolish.", category: "Motivation" },
    { text: "Knowledge is power.", category: "Education" }
  ];
  
  // Function to display a random quote
  function displayRandomQuote() {
    if (quotes.length === 0) {
      document.getElementById("quoteDisplay").textContent = "No quotes available.";
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const q = quotes[randomIndex];
  
    const display = document.getElementById("quoteDisplay");
    display.textContent = `"${q.text}" — (${q.category})`;
  }
  
  // Function to add a new quote
  function addQuote() {
    const textInput = document.getElementById("newQuoteText");
    const categoryInput = document.getElementById("newQuoteCategory");
  
    const newText = textInput.value.trim();
    const newCategory = categoryInput.value.trim();
  
    if (newText === "" || newCategory === "") {
      alert("Please enter both a quote and a category.");
      return;
    }
  
    // Add new quote to array
    quotes.push({
      text: newText,
      category: newCategory
    });
  
    // Update DOM with the new quote
    const display = document.getElementById("quoteDisplay");
    display.textContent = `"${newText}" — (${newCategory})`;
  
    // Clear input fields
    textInput.value = "";
    categoryInput.value = "";
  }
  
  // Event listeners
  document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
  document.getElementById("addQuote").addEventListener("click", addQuote);
  
  // Show a random quote on page load
  displayRandomQuote();
  