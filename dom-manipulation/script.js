// SERVER SIMULATION
const SERVER_URL = "https://jsonplaceholder.typicode.com/posts";

// Quotes array (loaded from local storage)
let quotes = [];

// Load quotes from local storage
function loadQuotes() {
  const storedQuotes = localStorage.getItem("quotes");
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  } else {
    quotes = [
      { text: "Stay hungry, stay foolish.", category: "Motivation" },
      { text: "Knowledge is power.", category: "Education" }
    ];
    saveQuotes();
  }
}

// Save quotes to local storage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Show random quote
function showRandomQuote() {
  const selectedCategory = localStorage.getItem("lastCategory") || "all";
  const filteredQuotes = selectedCategory === "all"
    ? quotes
    : quotes.filter(q => q.category === selectedCategory);

  if (filteredQuotes.length === 0) {
    document.getElementById("quoteDisplay").textContent = "No quotes available.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const q = filteredQuotes[randomIndex];

  document.getElementById("quoteDisplay").textContent = `"${q.text}" — (${q.category})`;

  // Save last viewed quote index in session storage
  sessionStorage.setItem("lastQuoteIndex", quotes.indexOf(q));
}

// Add a new quote
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
  saveQuotes();
  populateCategories();

  document.getElementById("quoteDisplay").textContent = `"${newText}" — (${newCategory})`;

  textInput.value = "";
  categoryInput.value = "";
}

// Dynamically create Add Quote form
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
  addButton.textContent = "Add Quote";
  addButton.addEventListener("click", addQuote);

  formContainer.appendChild(textInput);
  formContainer.appendChild(categoryInput);
  formContainer.appendChild(addButton);

  document.body.appendChild(formContainer);
}

// Populate categories dynamically
function populateCategories() {
  const select = document.getElementById("categoryFilter");
  const lastSelected = localStorage.getItem("lastCategory") || "all";

  const categories = [...new Set(quotes.map(q => q.category))];

  select.innerHTML = '<option value="all">All Categories</option>';
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });

  select.value = lastSelected;
}

// Filter quotes based on selected category
function filterQuotes() {
  const selectedCategory = document.getElementById("categoryFilter").value;
  localStorage.setItem("lastCategory", selectedCategory);
  showRandomQuote();
}

// Export quotes as JSON
function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();

  URL.revokeObjectURL(url);
}

// Import quotes from JSON
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(e) {
    try {
      const importedQuotes = JSON.parse(e.target.result);
      if (Array.isArray(importedQuotes)) {
        quotes.push(...importedQuotes);
        saveQuotes();
        populateCategories();
        alert("Quotes imported successfully!");
      } else {
        alert("Invalid JSON format.");
      }
    } catch (error) {
      alert("Error reading JSON file: " + error);
    }
  };
  fileReader.readAsText(event.target.files[0]);
}

// -------------------- SERVER SYNC --------------------

// Fetch server quotes (simulation)
async function fetchServerQuotes() {
  try {
    const response = await fetch(SERVER_URL);
    const data = await response.json();
    const serverQuotes = data.slice(0, 5).map(item => ({
      text: item.title,
      category: "Server"
    }));
    return serverQuotes;
  } catch (error) {
    console.error("Error fetching server quotes:", error);
    return [];
  }
}

// Sync with server
async function syncWithServer() {
  const serverQuotes = await fetchServerQuotes();

  serverQuotes.forEach(sq => {
    const exists = quotes.some(q => q.text === sq.text && q.category === sq.category);
    if (!exists) {
      quotes.push(sq);
    }
  });

  saveQuotes();
  populateCategories();
  showRandomQuote();

  if (serverQuotes.length > 0) {
    alert("Quotes have been synced with the server!");
  }
}

// Manual sync
function manualSync() {
  syncWithServer();
  alert("Manual sync completed!");
}

// -------------------- INITIALIZATION --------------------
document.addEventListener("DOMContentLoaded", () => {
  loadQuotes();
  createAddQuoteForm();
  populateCategories();
  showRandomQuote();

  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  document.getElementById("exportJson").addEventListener("click", exportToJsonFile);
  document.getElementById("importFile").addEventListener("change", importFromJsonFile);
  document.getElementById("manualSync").addEventListener("click", manualSync);

  const lastIndex = sessionStorage.getItem("lastQuoteIndex");
  if (lastIndex !== null && quotes[lastIndex]) {
    document.getElementById("quoteDisplay").textContent = `"${quotes[lastIndex].text}" — (${quotes[lastIndex].category})`;
  }

  // Auto-sync every 30 seconds
  setInterval(syncWithServer, 30000);
});
