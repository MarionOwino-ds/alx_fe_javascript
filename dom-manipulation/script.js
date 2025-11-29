// Array of quote objects
let quotes = [
    { text: "Stay hungry, stay foolish.", category: "Motivation" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspiration" },
    { text: "Simplicity is the soul of efficiency.", category: "Productivity" }
  ];
  
  // Display a random quote
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteObj = quotes[randomIndex];
  
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `
      <p><strong>Quote:</strong> ${quoteObj.text}</p>
      <p><strong>Category:</strong> ${quoteObj.category}</p>
    `;
  }
  
  // Add a new quote dynamically
  function addQuote() {
    const textInput = document.getElementById("newQuoteText");
    const categoryInput = document.getElementById("newQuoteCategory");
  
    const newText = textInput.value.trim();
    const newCategory = categoryInput.value.trim();
  
    if (newText === "" || newCategory === "") {
      alert("Please fill in both fields.");
      return;
    }
  
    // Add quote to array
    quotes.push({
      text: newText,
      category: newCategory
    });
  
    // Clear inputs
    textInput.value = "";
    categoryInput.value = "";
  
    alert("Quote added successfully!");
  }
  
  // Event listeners
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  document.getElementById("addQuoteBtn").addEventListener("click", addQuote);
  
  // Show a quote on page load
  showRandomQuote();
  