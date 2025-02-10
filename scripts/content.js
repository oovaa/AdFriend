// // scripts/content.js

// // List of common ad-related CSS selectors
// const adSelectors = [
//   "[id^='ad_']", // IDs starting with "ad_"
//   "[class*='ad']", // Classes containing "ad"
//   "[class*='banner']", // Banner ads
//   "iframe[src*='ads']", // Iframes with "ads" in src
//   'div[data-advertising]', // Custom ad attributes
//   'ins.adsbygoogle', // Google Ads
// ]
// // Function to find and remove ads
// function removeAds() {
//   adSelectors.forEach((selector) => {
//     document.querySelectorAll(selector).forEach((ad) => {
//       ad.replaceWith(createCustomWidget()) // Replace ad with custom content
//     })
//   })
// }

// // Function to create a motivational widget
// function createCustomWidget() {
//   const widget = document.createElement('div')
//   widget.style.cssText =
//     'padding: 10px; background: #f4f4f4; border: 1px solid #ddd;'
//   widget.innerHTML = `<h4>✨ Stay Motivated! ✨</h4><p>Keep pushing forward! 💪</p>`
//   return widget
// }

// // Run when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', removeAds)

// // Use MutationObserver to track new ads
// const observer = new MutationObserver(removeAds)
// observer.observe(document.body, { childList: true, subtree: true })
