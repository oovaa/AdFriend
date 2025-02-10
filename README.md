# AdFriend - Transform Ads into Positive Content

![AdFriend Banner](images/icon-128.png)

A Chrome extension that replaces online advertisements with uplifting content to create a more positive browsing experience.

## Features

- 🛡️ **Ad Replacement** - Transforms ads into:
  - Motivational quotes
  - Helpful reminders
  - Positive affirmations
- 🎚️ **Customizable Content** - Choose which content types to display
- 📊 **Usage Statistics** - Track ads replaced and estimated time saved
- 🔄 **Dynamic Updates** - Automatically handles new/dynamic ads
- 🎨 **Beautiful UI** - Clean, modern widgets with smooth animations

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/adfriend-extension.git
   ```
2. Open Chrome and navigate to:
   ```
   chrome://extensions/
   ```
3. Enable **Developer mode** (toggle in top-right)
4. Click **Load unpacked** and select the extension directory

## Usage

1. Click the AdFriend icon in your toolbar
2. Configure preferences:
   - Toggle extension on/off
   - Select content types (Quotes/Reminders/Affirmations)
   - View your personal stats
3. Browse normally - ads will be automatically replaced!

## How It Works

- **Content Detection**: Uses CSS selectors to identify ad containers
- **Dynamic Handling**: MutationObserver detects new ads loaded after page changes
- **Content Replacement**: Swaps ads with configurable positive content
- **Persistent Storage**: Saves preferences and stats using Chrome sync storage

## Technical Details

- **Manifest V3** compliant
- **Permissions**:
  - `storage` - Save user preferences
  - `scripting` - Modify page content
  - `webNavigation` - Detect page changes
  - `<all_urls>` - Work across all websites
- **Tech Stack**:
  - Vanilla JavaScript
  - Modern CSS
  - Chrome Extension APIs

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

**Prerequisites**:
- Node.js v16+
- npm/yarn
- Chrome browser

## License

MIT License - see [LICENSE](LICENSE) for details

---

**Note**: This is a community project not affiliated with any advertising network. The extension aims to improve user experience by replacing ads with positive content while respecting content creators.

