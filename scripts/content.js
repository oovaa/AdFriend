// scripts/content.js

// Function to replace the content of all heading tags
function replaceHeaders() {
  // Select all heading tags (h1, h2, h3, h4, h5, h6)
  const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6')

  headers.forEach((header) => {
    // Replace the content of each header
    // Store the original content in a data attribute if it hasn't been stored already
    if (!header.dataset.originalText) {
      header.dataset.originalText = header.textContent
    }
    header.textContent = `Replaced: ${header.tagName} (Original: ${header.dataset.originalText})`
  })

  console.log(`Replaced ${headers.length} headers.`)
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', replaceHeaders)

// Use MutationObserver to handle dynamically added headers
const observer = new MutationObserver(replaceHeaders)
observer.observe(document.body, { childList: true, subtree: true })
