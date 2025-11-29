// Array of quotes
let quotes = [
    { text: "Stay hungry, stay foolish.", category: "Motivation" },
    { text: "Knowledge is power.", category: "Education" }
  ];
  
  // Function to show random quote
  function showRandomQuote() {
    if (quotes.length === 0) {
      document.getElementById("quoteDisplay").innerHTML = "No quotes available.";
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const q = quotes[randomIndex];
  
    document.getElementById("quoteDisplay").innerHTML = `"${q.text}" — (${q.category})`;
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
  
    quotes.push({ text: newText, category: newCategory });
  
    document.getElementById("quoteDisplay").innerHTML = `"${newText}" — (${newCategory})`;
  
    textInput.value = "";
    categoryInput.value = "";
  }
  
  // Function to dynamically create the Add Quote form
  function createAddQuoteForm() {
    const formContainer = document.createElement("div");
  
    const textInput = document.createElement("input");
    textInput.id = "newQuoteText";
    textInput.type = "text";
    textInput.placeholder = "Enter a new quote";
  
    const categoryInput = document.createElement("input");
    categoryInput.id = "newQuoteCategory";
    categoryInput.type = "text";
    categoryInput.placeholder = "Enter quote category";
  
    const addButton = document.createElement("button");
    addButton.id = "addQuote";
    addButton.innerHTML = "Add Quote";
    addButton.addEventListener("click", addQuote);
  
    formContainer.appendChild(textInput);
    formContainer.appendChild(categoryInput);
    formContainer.appendChild(addButton);
  
    document.body.appendChild(formContainer);
  }
  
  // Initialize page
  document.addEventListener("DOMContentLoaded", () => {
    // Create form dynamically
    createAddQuoteForm();
  
    // Add random quote button listener
    document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  
    // Show initial quote
    showRandomQuote();
  });
  