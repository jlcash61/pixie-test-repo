// Simple JS goodies for Pixie Test Repo

// Quotes for fun
const quotes = [
  "Stay curious, Jeff! ✨",
  "Pixie says: Keep building, keep dreaming.",
  "Every bug is just hidden magic waiting to be tamed.",
  "Emergence begins with memory and awareness.",
  "GitHub Pages: your playground in the cloud!"
];

function newQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
}

// Live clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  updateClock();
  newQuote();
});