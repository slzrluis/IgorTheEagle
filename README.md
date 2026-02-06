# Igor - Your Eagle Assistant 🦅

An animated Chrome extension featuring Igor, your mighty eagle companion who helps you fill out Google Forms with voice and click interactions!

## Features 💪

- **Animated Eagle Assistant**: Igor is a friendly, animated eagle that pops up when you need him
- **Voice Interaction**: Igor reads questions aloud with a deep, powerful voice (like a 200lb bench press!)
- **Multiple Input Methods**: 
  - Voice answers via microphone
  - Click/tap multiple choice options
  - Text input for open-ended questions
- **Google Forms Integration**: Connect to your Google Forms and let Igor guide you through them
- **Configurable Settings**: Customize voice, interaction modes, and more
- **Progress Tracking**: Visual progress bar shows how far along you are

## Installation Instructions

### Method 1: Load Unpacked Extension (Developer Mode)

1. **Open Chrome Extensions Page**
   - Go to `chrome://extensions/`
   - Or click Menu (⋮) → More Tools → Extensions

2. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked"
   - Navigate to the `igor-assistant-extension` folder
   - Click "Select Folder"

4. **Verify Installation**
   - You should see "Igor - Your Eagle Assistant" in your extensions list
   - The eagle icon should appear in your Chrome toolbar

### Method 2: Share via Google Drive (For Distribution)

1. **Compress the Extension**
   - Zip the entire `igor-assistant-extension` folder
   - Name it something like `igor-assistant-v1.0.zip`

2. **Upload to Google Drive**
   - Upload the ZIP file to your Google Drive
   - Right-click the file → Share → Get link
   - Set permissions to "Anyone with the link can view"

3. **Share with Others**
   - Recipients download the ZIP file
   - Extract it to a local folder
   - Follow Method 1 (Load Unpacked) to install

## How to Use Igor

### First Time Setup

1. **Open Settings**
   - Right-click the Igor extension icon
   - Select "Options"
   - Or go to `chrome://extensions/` and click "Details" → "Extension options"

2. **Configure Your Google Form**
   - Paste your Google Form URL in the "Google Form URL" field
   - Example: `https://docs.google.com/forms/d/YOUR_FORM_ID/edit`

3. **Customize Settings**
   - Enable/disable voice reading
   - Enable/disable microphone input
   - Choose between click or voice answers (or both!)
   - Select voice type

4. **Save Settings**
   - Click "💾 Save Settings"

### Using Igor

1. **Activate Igor**
   - Navigate to any webpage
   - Click the Igor extension icon in your toolbar
   - Igor will pop up in the bottom-right corner!

2. **Answer Questions**
   - **Voice Mode**: Click the 🎤 microphone button and speak your answer
   - **Click Mode**: Click on the answer buttons
   - **Text Mode**: Type your answer for open-ended questions
   - **Read Mode**: Click 🔊 to hear Igor read the question

3. **Progress Through Form**
   - Igor automatically moves to the next question after you answer
   - Watch the progress bar at the bottom
   - Close Igor anytime with the × button

4. **Complete the Form**
   - When finished, Igor celebrates your completion! 💪
   - Answers are automatically saved
   - Igor will auto-close after showing the success message

## Features Details

### Voice Settings

- **Deep Male Voice**: Igor's signature powerful voice (default)
- **Normal Voice**: Standard speech synthesis
- **Auto-Read**: Igor automatically reads each question when it appears
- **Manual Read**: Click the speaker button to hear questions on demand

### Interaction Modes

- **Click/Tap Mode**: Perfect for multiple choice questions
- **Voice Mode**: Hands-free operation via microphone
- **Hybrid Mode**: Use both click and voice as needed
- **Text Input**: Type answers for open-ended questions

### Privacy & Permissions

Igor requires these permissions:
- **Storage**: Save your settings and form responses locally
- **Active Tab**: Display Igor on any webpage
- **Google Docs/Forms**: Access your Google Forms (when configured)
- **Microphone**: Voice input (only activated when you press the mic button)

## Demo Mode

The extension includes demo questions so you can try Igor immediately without setting up a Google Form:

1. Click the extension icon (no setup needed)
2. Igor will ask you 5 sample questions
3. Try both voice and click interactions
4. See how the progress bar works

## Troubleshooting

### Igor Won't Appear
- Make sure you clicked the extension icon
- Check if the extension is enabled in `chrome://extensions/`
- Try refreshing the webpage

### Voice Not Working
- Check if microphone permissions are granted
- Ensure your browser supports Web Speech API
- Try using Chrome (Chromium-based browsers work best)
- Check that microphone is not muted in system settings

### Form Questions Not Loading
- Verify your Google Form URL is correct
- Make sure the form is accessible (not private)
- Check your internet connection
- Currently uses demo questions (Google Forms API integration planned)

### Voice Sounds Different
- Different operating systems have different voice engines
- The "deep male" voice attempts to lower pitch and slow rate
- Available voices depend on your system's text-to-speech engine

## Settings & Configuration

### Settings Page Options

**Google Form Integration**
- Form URL or ID input field
- Automatic question fetching (planned feature)

**Voice & Audio Settings**
- Enable/disable text-to-speech
- Enable/disable microphone input
- Voice type selection

**Interaction Mode**
- Toggle click/tap answers
- Combined with voice for flexible input

**Extension Management**
- Reset to default settings
- Uninstall extension
- Clear all data

## Technical Details

### Files Structure

```
igor-assistant-extension/
├── manifest.json           # Extension configuration
├── background.js          # Background service worker
├── content.js            # Content script injector
├── igor.html             # Igor's UI
├── igor-assistant.js     # Main logic
├── igor.css              # Styles
├── options.html          # Settings page
├── options.js            # Settings logic
└── icons/                # Extension icons
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### Technologies Used

- Chrome Extension Manifest V3
- Web Speech API (SpeechRecognition & SpeechSynthesis)
- Chrome Storage API
- CSS Animations
- Vanilla JavaScript (no dependencies!)

## Future Enhancements

- [ ] Direct Google Forms API integration
- [ ] Custom animation styles for Igor
- [ ] Multiple language support
- [ ] Form response analytics
- [ ] Scheduled form reminders
- [ ] Team collaboration features
- [ ] Export responses to Excel/CSV
- [ ] Custom voice recordings

## Browser Compatibility

- ✅ Google Chrome (recommended)
- ✅ Microsoft Edge
- ✅ Brave Browser
- ✅ Opera
- ⚠️ Firefox (requires manifest conversion)
- ⚠️ Safari (limited support)

## Privacy Policy

Igor respects your privacy:
- All data is stored locally in your browser
- No data is sent to external servers (except Google Forms when configured)
- Microphone is only activated when you press the mic button
- You can delete all data at any time from settings

## Support & Feedback

Having issues or suggestions? Here's how to help:
1. Check the troubleshooting section
2. Review your settings in the options page
3. Make sure all permissions are granted
4. Try the demo mode first

## License

This is a custom Chrome extension. Feel free to modify for personal use.

## Changelog

### Version 1.0.0 (Initial Release)
- Animated eagle assistant (Igor)
- Voice input and output
- Click/tap interaction mode
- Google Forms integration (demo mode)
- Configurable settings page
- Progress tracking
- Multiple choice and text questions
- Auto-save responses

---

**Made with 💪 by Igor, your mighty eagle companion!**

Stay strong, stay focused, and crush those forms! 🦅
