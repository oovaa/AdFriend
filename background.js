import './sw-omnibox.js'
import './sw-tips.js'

// const extensions = 'https://developer.chrome.com/docs/extensions'
// const webstore = 'https://developer.chrome.com/docs/webstore'

// let nextState = ''
// chrome.action.onClicked.addListener(async (tab) => {
//   if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
// Retrieve the action badge to check if the extension is 'ON' or 'OFF'
//     const prevState = await chrome.action.getBadgeText({ tabId: tab.id }) || ''
// Next state will always be the opposite
//     nextState = prevState === 'ON' ? 'OFF' : 'ON'

// Set the action badge to the next state
//     await chrome.action.setBadgeText({
//       tabId: tab.id,
//       text: nextState,
//     })
//     if (nextState === 'ON') {
//       await chrome.scripting.insertCSS({
//         files: ['focus-mode.css'],
//         target: { tabId: tab.id },
//       })
//     } else if (nextState === 'OFF') {
// Remove the CSS file when the user turns the extension off
//       await chrome.scripting.removeCSS({
//         files: ['focus-mode.css'],
//         target: { tabId: tab.id },
//       })
//     }
//   }
// })
