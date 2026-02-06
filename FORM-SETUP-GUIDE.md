# How to Connect Igor to Your Google Form 📝

## Quick Setup (3 Steps)

### Step 1: Get Your Form URL

**Option A: Published Form (Recommended)**
1. Open your Google Form
2. Click the **"Send"** button (top-right)
3. Click the **link icon** (🔗)
4. Copy the entire URL
   - Example: `https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform`

**Option B: Edit Form**
1. Open your Google Form in edit mode
2. Copy the URL from the browser address bar
   - Example: `https://docs.google.com/forms/d/1ABC123xyz/edit`

### Step 2: Configure Igor

1. **Right-click the Igor icon** → Select **"Options"**
2. **Paste your form URL** in the "Google Form URL" field
3. **Click "💾 Save Settings"**

### Step 3: Test It!

1. Go to any website (like google.com)
2. Click the Igor icon
3. Igor will now ask YOUR form questions! 🎉

---

## Important: Form Must Be Public

**Your form MUST be accessible without login:**

### Make Your Form Public:

1. Open your Google Form
2. Click **"Send"** button
3. Click the **link icon** (🔗)
4. **Shorten URL** (optional but recommended)
5. Share this link - anyone with the link can view it

**OR**

1. In form settings (⚙️)
2. Under "Responses"
3. Make sure it's NOT set to "Limit to 1 response"
4. Make sure it's NOT restricted to your organization

### Test if Your Form is Public:

1. Copy your form URL
2. Open an **Incognito/Private window** (Ctrl+Shift+N)
3. Paste the URL
4. If you can see the form without logging in → ✅ It's public!
5. If it asks you to login → ❌ It's private, adjust settings

---

## Supported Question Types

Igor supports these Google Forms question types:

✅ **Short Answer** → Text input
✅ **Paragraph** → Text input  
✅ **Multiple Choice** → Click buttons
✅ **Checkboxes** → Click buttons (first option)
✅ **Dropdown** → Click buttons
✅ **Linear Scale** → Click buttons (1-10)

⚠️ **Partially Supported:**
- File upload (not supported)
- Date/Time (use short answer instead)
- Grid questions (first row only)

---

## URL Format Examples

Igor accepts these URL formats:

**Published Form (Best):**
```
https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform
```

**Edit Mode:**
```
https://docs.google.com/forms/d/1ABC123xyz/edit
```

**Shortened:**
```
https://forms.gle/ABC123
```

**With Prefilled Answers:**
```
https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?entry.123=value
```

All of these will work! Igor extracts the form ID automatically.

---

## Troubleshooting

### "Could not fetch form" Error

**Possible Causes:**
1. Form is private (requires login)
2. Form URL is incorrect
3. Internet connection issue
4. Form has been deleted

**Solutions:**
1. ✅ Make form public (see above)
2. ✅ Double-check the URL
3. ✅ Try opening the URL in incognito
4. ✅ Make sure you copied the complete URL

### "No questions found" Message

**Possible Causes:**
1. Form has no questions yet
2. Form has complex question types
3. Form is using sections/pages

**Solutions:**
1. ✅ Add questions to your form
2. ✅ Use supported question types
3. ✅ Keep questions on first page for now

### Questions Look Wrong

**Possible Causes:**
1. Form was recently edited
2. Complex form structure

**Solutions:**
1. ✅ Click Igor icon again to reload
2. ✅ Reload the extension (chrome://extensions/)
3. ✅ Simplify your form structure

---

## Testing Your Setup

### Create a Test Form:

1. Go to **forms.google.com**
2. Click **"+ Blank"** to create new form
3. Add these questions:
   ```
   Question 1: What's your name? (Short answer)
   Question 2: How are you? (Multiple choice: Great, Good, Okay, Not great)
   Question 3: Favorite color? (Multiple choice: Red, Blue, Green, Yellow)
   ```
4. Click **"Send"** → Get link
5. Copy the URL
6. Paste in Igor settings
7. Test with Igor!

---

## Advanced: Form Structure Tips

### For Best Results:

**✅ Do:**
- Use clear, concise question text
- Limit multiple choice to 4-6 options
- Use short answer for names/emails
- Put most important questions first
- Keep question text under 100 characters

**❌ Avoid:**
- Required questions that aren't necessary
- Too many questions (10+ takes a while)
- Complex grid questions
- File upload questions
- Very long question text

### Example Good Form:

```
Form Title: Daily Check-in

1. Name? (Short answer)
2. Feeling today? (Multiple: Great/Good/Okay/Bad)
3. Energy level? (Linear scale 1-10)
4. Biggest win today? (Short answer)
5. Any concerns? (Paragraph - optional)
```

---

## How Igor Submits Responses

**Current Version:**
- Igor **collects** your answers
- **Stores them** locally in Chrome
- **Does NOT auto-submit** to Google Forms yet

**Future Version:**
- Will auto-submit directly to your form
- Real-time sync with Google Forms
- Form response confirmation

**For Now:**
- Responses are saved in extension storage
- You can view them in settings
- Manual submission to form (copy/paste)

---

## Privacy & Security

**What Igor Does:**
- ✅ Fetches questions from public form URL
- ✅ Stores answers locally in your browser
- ✅ Never sends data to external servers

**What Igor Doesn't Do:**
- ❌ Access your Google account
- ❌ Modify your forms
- ❌ Share your responses
- ❌ Track your activity

**Your Data:**
- Stored only in Chrome local storage
- Never leaves your device
- You can clear it anytime in settings
- Deleted when you uninstall extension

---

## Getting Form URL: Step-by-Step Screenshots Guide

### Method 1: From "Send" Button

```
Step 1: Open form → Click "Send" (top-right)
        ┌────────────────────────────────┐
        │ Your Form Title         [Send] │ ← Click here
        └────────────────────────────────┘

Step 2: Click link icon
        ┌──────────────────────┐
        │ 📧  🔗  <>          │
        │      ↑               │  ← Click link icon
        └──────────────────────┘

Step 3: Copy URL
        ┌─────────────────────────────────────┐
        │ https://docs.google.com/forms/...  │
        │                            [Copy]   │ ← Copy this
        └─────────────────────────────────────┘
```

### Method 2: From Browser Address Bar

```
Step 1: Open form in edit or view mode
Step 2: Click address bar (or press Ctrl+L)
Step 3: Select all (Ctrl+A)
Step 4: Copy (Ctrl+C)
```

---

## FAQ

**Q: Can I use a private/internal form?**
A: Not yet. The form must be publicly accessible. Future versions may support OAuth.

**Q: Will answers be submitted to my form?**
A: Currently, answers are only saved locally. Auto-submission coming in future update.

**Q: Can I use multiple forms?**
A: Yes! Just change the URL in settings before using Igor.

**Q: Does this work with Google Forms alternatives?**
A: Not yet. Currently only Google Forms is supported.

**Q: How many questions can Igor handle?**
A: Tested up to 50 questions. Works best with 5-15 questions.

**Q: Can I edit the form after setting up Igor?**
A: Yes! Igor fetches fresh questions each time you click the icon.

---

## What's Next?

**Planned Features:**
- 🔜 Direct form submission
- 🔜 OAuth integration for private forms
- 🔜 Multi-page form support
- 🔜 Conditional logic questions
- 🔜 Form response analytics
- 🔜 Batch form completion
- 🔜 Team collaboration features

---

**Need Help?**

If you're stuck:
1. ✅ Check form is public (test in incognito)
2. ✅ Verify URL is complete
3. ✅ Try the demo questions first (leave URL blank)
4. ✅ Check console for error messages (F12)
5. ✅ Reload the extension

**Still not working?** Open the browser console (F12) and look for error messages. They'll tell you exactly what's wrong!

---

💪🦅 **Ready to connect your form? Let's go!**
