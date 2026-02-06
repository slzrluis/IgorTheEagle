# Google Forms Integration Guide 📝

## How Igor Works with Google Forms

Igor is designed to help you fill out Google Forms through an interactive voice and click interface. Here's how to set it up:

## Current Version (v1.0)

The current version includes **demo questions** built into the extension. This allows you to:
- Test Igor's functionality immediately
- Experience voice and click interactions
- See how the progress tracking works
- Get familiar with the interface

### Demo Questions Included:
1. "What's your name, champ?"
2. "How are you feeling today?"
3. "What's your favorite way to stay active?"
4. "On a scale of 1-10, how's your energy level?"
5. "Any feedback you want to share?"

## Setting Up Your Google Form

While the current version uses demo questions, you can still configure your form URL in settings for future integration:

### Step 1: Get Your Form URL
1. Open your Google Form
2. Click "Send" button (top-right)
3. Copy the form URL
   - Example: `https://docs.google.com/forms/d/1ABC123xyz/edit`

### Step 2: Add to Igor Settings
1. Right-click Igor icon → Options
2. Paste the URL in "Google Form URL" field
3. Save settings

### Step 3: Form Structure (For Best Results)

When creating your Google Form, structure it for optimal Igor interaction:

**Good Question Types:**
- ✅ Multiple choice (Igor shows clickable buttons)
- ✅ Short answer (Igor provides text input + voice option)
- ✅ Checkboxes (Igor can handle multiple selections)
- ✅ Linear scale (Igor presents as multiple choice)

**Limited Support:**
- ⚠️ Paragraph (works with voice input)
- ⚠️ File upload (not supported in current version)
- ⚠️ Date/Time (use short answer instead)

## Response Storage

Igor temporarily stores your responses in Chrome's local storage before submitting them to Google Forms.

### Where Responses Are Stored:
- **Temporary**: Chrome local storage (encrypted)
- **Final**: Submitted to your Google Form
- **Access**: Can be viewed in Google Forms responses tab

### Privacy:
- Responses are only stored locally until submission
- No external servers (except Google Forms)
- You can clear stored responses in settings

## Advanced Configuration (Coming Soon)

Future versions will include:
- Direct Google Forms API integration
- Automatic question fetching from your form
- Real-time form submission
- Multi-page form support
- Conditional logic support
- Form response analytics

## Creating Forms for Igor

### Best Practices:

**1. Keep Questions Clear**
```
Good: "How old are you?"
Better: "What's your age in years?"
```

**2. Use Multiple Choice When Possible**
```
Question: "What's your experience level?"
Options:
- Beginner
- Intermediate  
- Advanced
- Expert
```

**3. Provide Context for Voice Users**
```
Instead of: "Rate 1-5"
Use: "On a scale of 1 to 5, with 1 being poor and 5 being excellent, how would you rate..."
```

**4. Limit Option Count**
- Keep multiple choice to 4-6 options for best voice experience
- More options work better with click mode

**5. Structure for Flow**
```
✅ Start with easy questions (name, email)
✅ Group related questions together
✅ End with open feedback
```

## Example Form Template

Here's a template you can copy:

```
Form Title: Daily Check-in Form

1. What's your name? (Short answer)

2. How are you feeling today? (Multiple choice)
   - Excellent
   - Good
   - Okay
   - Not great
   - Prefer not to say

3. Energy level (1-10)? (Multiple choice)
   - 1-2 (Very low)
   - 3-4 (Low)
   - 5-6 (Moderate)
   - 7-8 (High)
   - 9-10 (Very high)

4. What did you accomplish today? (Short answer)

5. Any challenges or concerns? (Paragraph)

6. Anything else to share? (Paragraph)
```

## Troubleshooting Form Integration

### Form URL Not Working?
- Ensure the form is not restricted (check sharing settings)
- Use the full URL including `https://`
- Make sure you have edit or view access

### Questions Not Appearing?
- Current version uses demo questions
- Google Forms API integration coming in future update
- For now, demo mode showcases all features

### Responses Not Submitting?
- Check your internet connection
- Verify form is still accepting responses
- Responses are saved locally and can be submitted later

## Manual Form Submission

If automatic submission isn't working:

1. Open Igor settings
2. View stored responses under "Extension Management"
3. Copy response data
4. Manually submit to Google Form

## Future Integration Features

We're working on:
- [ ] OAuth authentication with Google
- [ ] Direct form question fetching
- [ ] Real-time submission
- [ ] Form response validation
- [ ] Multi-page form navigation
- [ ] Conditional question logic
- [ ] Form analytics dashboard

## Sample Form URLs

For testing, you can create a simple Google Form:

1. Go to forms.google.com
2. Click "Blank" to create new form
3. Add questions using the template above
4. Click "Send" and copy URL
5. Paste in Igor settings

---

**Note**: The current version (v1.0) includes demo questions for immediate testing. Full Google Forms API integration is planned for future releases.

**Want to contribute?** Suggestions for form integration features are welcome!

💪🦅 Keep crushing those forms!
