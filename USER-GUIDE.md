# Igor Assistant - Complete User Guide 🦅

## Welcome to Igor!

Igor is your mighty eagle assistant that helps you complete Google Forms using voice commands and click interactions. This guide will walk you through everything you need to know!

---

## Table of Contents
1. [Installation](#installation)
2. [First Time Setup](#first-time-setup)
3. [Using Igor](#using-igor)
4. [Features & Settings](#features--settings)
5. [Tips & Tricks](#tips--tricks)
6. [Troubleshooting](#troubleshooting)

---

## Installation

### What You Need
- Google Chrome browser (or Chromium-based browser)
- The `igor-assistant-extension` folder
- 5 minutes of your time

### Installation Steps

**Step 1: Locate Your Extension Folder**
- Find the `igor-assistant-extension` folder
- Move it to a permanent location (like Documents folder)
- ⚠️ Important: Don't delete this folder while using the extension!

**Step 2: Open Chrome Extensions**
1. Open Google Chrome
2. Type `chrome://extensions/` in the address bar
3. Press Enter

**Step 3: Enable Developer Mode**
1. Look for "Developer mode" toggle in the top-right
2. Turn it ON (it will turn blue)

**Step 4: Load Igor**
1. Click "Load unpacked" button
2. Navigate to your `igor-assistant-extension` folder
3. Select the folder and click "Open" or "Select Folder"

**Step 5: Verify Installation**
- Look for "Igor - Your Eagle Assistant" in your extensions list
- You should see a small eagle icon in your Chrome toolbar
- ✅ Installation complete!

---

## First Time Setup

### Quick Start (Try Demo Mode)
The easiest way to get started is with demo mode:

1. Click the Igor icon in your Chrome toolbar
2. Igor will pop up in the bottom-right corner
3. He'll ask you 5 demo questions
4. Try answering different ways:
   - Click the answer buttons
   - Click 🎤 and speak your answer
   - Type in the text box
   - Click 🔊 to hear Igor read the question

### Configuring Your Settings

**Opening Settings:**
- Right-click the Igor icon → "Options"
- Or go to `chrome://extensions/` → Igor → "Details" → "Extension options"

**Settings You Can Configure:**

**1. Google Form URL**
- Paste your Google Form URL here
- Example: `https://docs.google.com/forms/d/YOUR_FORM_ID/edit`
- Note: v1.0 uses demo questions, but you can prepare for future updates

**2. Voice Settings**
- ☑️ Enable Text-to-Speech: Igor reads questions aloud
- ☑️ Enable Microphone: You can speak your answers
- Voice Type: Choose "Deep Male" (Igor's signature voice) or "Normal"

**3. Interaction Mode**
- ☑️ Enable Click/Tap Answers: Show clickable buttons for multiple choice
- You can enable both voice and click modes!

**4. Save Your Changes**
- Always click "💾 Save Settings" at the bottom

---

## Using Igor

### Activating Igor
1. Navigate to any webpage
2. Click the Igor icon in your toolbar
3. Igor pops up in the bottom-right corner
4. He's ready to go! 💪

### Answering Questions

**Method 1: Click/Tap**
- Perfect for multiple choice questions
- Just click the button with your answer
- Fast and accurate

**Method 2: Voice**
1. Click the 🎤 microphone button
2. Wait for it to turn teal (listening mode)
3. Speak your answer clearly
4. Igor processes and moves to next question

**Method 3: Type**
- For open-ended questions
- Type in the text box
- Press Enter or click "Submit"

**Method 4: Listen**
- Click 🔊 speaker button anytime
- Igor reads the current question
- Helpful if you missed something

### The Igor Interface

```
┌─────────────────────────────────────┐
│  Igor (animated eagle)        [×]   │  ← Close button
│                                     │
│  ┌─────────────────────────────┐   │
│  │ "What's your name, champ?"  │   │  ← Question
│  │                             │   │
│  │ [Type here or use mic...]   │   │  ← Input area
│  │                             │   │
│  │ [Submit]                    │   │  ← Submit button
│  └─────────────────────────────┘   │
│                                     │
│  [🎤 Speak]  [🔊 Read]              │  ← Controls
│                                     │
│  ████░░░░░░░░░░░░░░░░░░░░░░░      │  ← Progress bar
└─────────────────────────────────────┘
```

### Completing the Form

As you answer questions:
- Progress bar fills up
- Question counter advances
- Igor automatically moves to next question

When you finish:
- Igor shows a success message
- Your answers are saved
- Window auto-closes after 3 seconds
- Or click × to close anytime

---

## Features & Settings

### Voice Features

**Igor's Voice**
- Deep, powerful voice (like 200lb bench press!)
- Adjustable pitch and rate
- System-dependent (varies by OS)
- Can be toggled on/off in settings

**Voice Recognition**
- Uses Web Speech API
- Works in Chrome, Edge, Brave
- Requires microphone permission
- Best with clear speech in quiet environment

**Auto-Read Mode**
- Igor automatically reads each new question
- Disable in settings if you prefer manual control
- Click 🔊 anytime for manual read

### Click/Tap Features

**Multiple Choice**
- Shows as clickable buttons
- Hover effects for feedback
- One-click selection

**Text Input**
- Full keyboard support
- Enter key to submit
- Or use voice instead

### Progress Tracking

**Visual Progress Bar**
- Shows questions completed
- Real-time updates
- Color-coded (teal = progress)

**Question Counter**
- "Question 2 of 5"
- Always know where you are
- Can't skip questions (must answer in order)

### Data & Privacy

**What's Stored:**
- Your settings (sync storage)
- Form responses (local storage, temporary)
- No personal data sent anywhere except your Google Form

**Data Security:**
- All data encrypted
- No external servers (except Google Forms)
- You control all data
- Can clear anytime in settings

---

## Tips & Tricks

### For Best Voice Recognition

**Do:**
✅ Speak clearly and at normal pace
✅ Use a quiet environment
✅ Position mic 6-12 inches from mouth
✅ Wait for button to turn teal before speaking
✅ Say option exactly as shown (for multiple choice)

**Don't:**
❌ Shout or whisper
❌ Use in noisy environments
❌ Speak immediately (wait for button to activate)
❌ Use background music/TV

### For Multiple Choice Questions

**Voice Tips:**
- Say the full option: "Pumped!" or "Pretty good"
- Igor matches your speech to available options
- If no match, he'll ask you to try again

**Click Tips:**
- Hover to see button animation
- Click anywhere on button
- Works on touch screens too

### For Open-Ended Questions

**Best Practices:**
- Use voice for longer answers
- Type for short, precise answers
- Can use both (type, then add via voice)
- Press Enter to submit quickly

### Keyboard Shortcuts

While Igor is active:
- `Escape` - Close Igor
- `Enter` - Submit current answer (if applicable)
- `Space` - Trigger microphone (when focused)

### Battery & Performance

**To Save Battery:**
- Disable auto-read in settings
- Use click mode instead of voice
- Close Igor when not needed

**For Best Performance:**
- Close other Chrome tabs
- Use latest Chrome version
- Ensure good internet connection

---

## Troubleshooting

### Igor Won't Appear

**Problem:** Clicked icon but nothing happens

**Solutions:**
1. ✅ Check extension is enabled at `chrome://extensions/`
2. ✅ Refresh the webpage you're on
3. ✅ Try on a different webpage
4. ✅ Click icon again (double-click if needed)
5. ✅ Restart Chrome browser

---

### Microphone Not Working

**Problem:** Voice input doesn't work

**Solutions:**
1. ✅ Check microphone is plugged in/connected
2. ✅ Allow microphone permission when prompted
3. ✅ Check system microphone settings
4. ✅ Test microphone in other apps
5. ✅ Try different Chrome profile
6. ✅ Update Chrome to latest version

**Check Permissions:**
1. Right-click Igor icon → "This can read and change site data"
2. Ensure "On all sites" is selected
3. Check system settings → Privacy → Microphone → Chrome

---

### Voice Not Reading

**Problem:** Igor won't read questions aloud

**Solutions:**
1. ✅ Check "Enable Text-to-Speech" in settings
2. ✅ Check system volume is on
3. ✅ Try clicking 🔊 button manually
4. ✅ Check browser isn't muted (tab icon)
5. ✅ Test speech synthesis: Open console (F12), type:
   ```javascript
   speechSynthesis.speak(new SpeechSynthesisUtterance("test"))
   ```

---

### Extension Errors

**Problem:** Extension shows error or won't load

**Solutions:**
1. ✅ Go to `chrome://extensions/`
2. ✅ Click "Errors" button on Igor
3. ✅ Click "Clear all" errors
4. ✅ Disable then re-enable extension
5. ✅ Remove and reload extension
6. ✅ Ensure manifest.json is present in folder

---

### Igor Looks Weird / Not Animated

**Problem:** Eagle doesn't animate or looks broken

**Solutions:**
1. ✅ Clear browser cache (Ctrl+Shift+Del)
2. ✅ Disable other extensions temporarily
3. ✅ Check browser zoom is 100%
4. ✅ Try incognito mode
5. ✅ Update graphics drivers
6. ✅ Disable hardware acceleration in Chrome settings

---

### Responses Not Saving

**Problem:** Answers seem to disappear

**Solutions:**
1. ✅ Check storage permission is granted
2. ✅ Don't close browser immediately after completing
3. ✅ Check Chrome storage at `chrome://extensions/` → Igor → "Inspect views: service worker" → Application → Storage
4. ✅ Ensure enough disk space
5. ✅ Try completing form again

---

### Voice Recognition Fails

**Problem:** Igor says "I didn't catch that"

**Solutions:**
1. ✅ Speak more clearly
2. ✅ Reduce background noise
3. ✅ Say the exact option text for multiple choice
4. ✅ Try typing instead
5. ✅ Check your internet (recognition uses cloud)
6. ✅ Switch to click mode in settings

---

## Advanced Topics

### Sharing Igor with Your Team

**Option 1: Direct Folder Share**
1. Compress `igor-assistant-extension` to ZIP
2. Share ZIP file via email/Slack
3. Recipients extract and install (see Installation section)

**Option 2: Google Drive**
1. Upload ZIP to Google Drive
2. Right-click → Share → Get link
3. Set to "Anyone with the link"
4. Share link with team
5. They download, extract, install

### Multiple Forms

Want to use Igor with different forms?
1. Open settings before each form
2. Change the Form URL
3. Save settings
4. Reload Igor

### Customizing Igor

**Want different animations?**
- Edit `igor.html` CSS styles
- Modify animation keyframes
- Change colors, timing, effects

**Want different voice?**
- Edit `igor-assistant.js`
- Modify `utterance.pitch` and `utterance.rate`
- Experiment with values

**Want different questions?**
- Edit `loadFormQuestions()` in `igor-assistant.js`
- Add your own demo questions
- Customize text, types, options

---

## Uninstalling Igor

Sad to see you go, but here's how:

**Complete Uninstall:**
1. Go to `chrome://extensions/`
2. Find "Igor - Your Eagle Assistant"
3. Click "Remove"
4. Confirm removal
5. Delete the `igor-assistant-extension` folder from your computer

**Keeping Extension, Clearing Data:**
1. Right-click Igor icon → Options
2. Click "Reset to Defaults"
3. Or manually clear in Chrome storage

---

## Getting Help

**Before Reaching Out:**
1. ✅ Read this guide thoroughly
2. ✅ Check Troubleshooting section
3. ✅ Try demo mode first
4. ✅ Verify all permissions granted
5. ✅ Test in incognito mode

**System Requirements:**
- Chrome 88+ (or equivalent Chromium browser)
- Windows 10+, macOS 10.14+, or Linux
- Microphone (for voice features)
- Internet connection (for voice recognition)

---

## Version Information

**Current Version:** 1.0.0

**What's Included:**
- ✅ Animated eagle assistant (Igor)
- ✅ Voice input/output
- ✅ Click/tap interaction
- ✅ Demo questions (5 samples)
- ✅ Settings configuration
- ✅ Progress tracking
- ✅ Response storage

**Coming Soon:**
- 🔜 Direct Google Forms API integration
- 🔜 Real-time form fetching
- 🔜 Multi-page forms
- 🔜 Form analytics
- 🔜 Team collaboration
- 🔜 Export to Excel/CSV

---

## Credits & License

**Igor Assistant** - Your mighty eagle companion
Created as a custom Chrome extension for enhanced form completion.

**Technologies:**
- Chrome Extension Manifest V3
- Web Speech API
- Chrome Storage API
- CSS3 Animations
- Vanilla JavaScript

**Privacy:** All data stays on your device. No analytics, no tracking, no external servers (except Google Forms).

---

**Stay strong and keep crushing those forms! 💪🦅**

For questions, feedback, or issues, please refer to the README.md file or check the Troubleshooting section.

---

*Last Updated: February 2026*
*Version: 1.0.0*
