# Chrome Sidebar Calendar & Notes

A Chrome extension that adds a sleek sidebar panel with a calendar and daily notes functionality.

## Features

- 📅 **Mini Calendar**
  - Displays current date and month view
  - Highlights today's date
  - Allows navigation between months

- 📝 **Daily Notes**
  - Quick note-taking interface
  - Auto-saves notes for each date
  - Markdown support for rich text formatting

- 🎯 **Sidebar Panel**
  - Opens from right side of browser
  - Adjustable width
  - Minimalistic and clean design
  - Non-intrusive to main browsing experience

## Technical Implementation

### Core Components

1. **Manifest (v3)**
   - Browser action with popup
   - Sidebar panel implementation
   - Required permissions

2. **UI Components**
   - Calendar widget
   - Notes editor
   - Settings panel

3. **Data Management**
   - Chrome storage sync for cross-device access
   - Local storage backup
   - Date-based note organization

### File Structure

```
extension/
├── manifest.json
├── popup/
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
├── sidebar/
│   ├── sidebar.html
│   ├── sidebar.css
│   └── sidebar.js
├── components/
│   ├── calendar.js
│   └── notes.js
└── assets/
    └── icons/
```

## Development Plan

1. Set up basic extension structure with manifest v3
2. Implement sidebar panel injection
3. Develop calendar component
4. Create notes interface
5. Add data persistence
6. Polish UI/UX
7. Add settings and customization options

## Future Enhancements

- 🔄 Cloud sync support
- 🎨 Customizable themes
- 📊 Calendar view options (week/month)
- 🔔 Reminders and notifications
- 📱 Mobile companion app

## Installation

1. Clone repository
2. Open Chrome Extensions (chrome://extensions/)
3. Enable Developer Mode
4. Click "Load unpacked"
5. Select the extension directory

## Usage

1. Click the extension icon in Chrome toolbar
2. Sidebar panel appears on the right
3. View calendar and manage daily notes
4. Click outside or use close button to dismiss

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.