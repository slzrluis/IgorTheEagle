# Installation Troubleshooting Guide 🔧

## Common Installation Issues and Fixes

### Issue: "Failed to load extension - Could not load icon"

This is now **FIXED**! The icons have been recreated with proper RGBA format.

**What was wrong:**
- Empty `default_popup` field in manifest
- Icon format compatibility

**What's been fixed:**
- ✅ Removed empty default_popup field
- ✅ Recreated icons in RGBA format
- ✅ Optimized icon files
- ✅ Verified all icon sizes (16x16, 48x48, 128x128)

**To install the fixed version:**
1. If you had the old version loaded, go to `chrome://extensions/`
2. Find "Igor - Your Eagle Assistant" and click "Remove"
3. Click "Load unpacked" again
4. Select the `igor-assistant-extension` folder
5. The extension should now load without errors!

---

### Issue: Extension loads but icon is blank

**Solutions:**
1. ✅ Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
2. ✅ Restart Chrome completely
3. ✅ Check icon files exist in `icons/` folder
4. ✅ Verify manifest.json is valid (use JSON validator)

---

### Issue: "Manifest file is missing or unreadable"

**Cause:** Folder structure is incorrect

**Solution:**
1. ✅ Make sure you're selecting the `igor-assistant-extension` folder itself
2. ✅ NOT the parent folder containing it
3. ✅ The manifest.json should be in the root of selected folder

**Correct structure:**
```
igor-assistant-extension/          ← Select THIS folder
├── manifest.json                   ← Must be here
├── background.js
├── content.js
├── igor.html
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── ...
```

---

### Issue: "Package is invalid: CRX_HEADER_INVALID"

**Cause:** You're trying to drag/drop the folder

**Solution:**
1. ✅ Don't drag/drop the folder
2. ✅ Use the "Load unpacked" button
3. ✅ Then select the folder via the file picker

---

### Issue: Extension loads but nothing happens when clicked

**Cause:** Content script permissions

**Solutions:**
1. ✅ Click the extension icon on an actual webpage (not chrome:// pages)
2. ✅ Try on a simple page like google.com first
3. ✅ Check the console for errors (F12 → Console)
4. ✅ Verify permissions in `chrome://extensions/` → Details

---

### Issue: "This extension may not be enabled in Incognito mode"

**This is normal!**

**To enable in Incognito:**
1. Go to `chrome://extensions/`
2. Find Igor extension
3. Click "Details"
4. Scroll down to "Allow in incognito"
5. Toggle it ON

---

### Issue: Windows Security Warning

**Cause:** Windows protecting against unknown extensions

**Solution:**
1. ✅ This is expected for unpacked extensions
2. ✅ Click "More info" then "Run anyway"
3. ✅ Or add folder to Windows Defender exclusions

---

### Issue: Mac Gatekeeper Warning

**Cause:** macOS security for unsigned extensions

**Solution:**
1. ✅ Right-click the folder → "Open"
2. ✅ Or System Preferences → Security → Allow anyway
3. ✅ Developer mode extensions don't need signing

---

### Issue: Icons look pixelated or wrong colors

**Cause:** Browser cache

**Solutions:**
1. ✅ Go to `chrome://extensions/`
2. ✅ Click the circular arrow (reload) on Igor extension
3. ✅ Or remove and re-add the extension
4. ✅ Clear browser cache (Ctrl+Shift+Del)

---

### Issue: Multiple extensions with same name

**Cause:** Installed the extension multiple times

**Solution:**
1. ✅ Remove all copies from `chrome://extensions/`
2. ✅ Reload just once
3. ✅ Pin the icon to toolbar if needed

---

## Verification Checklist

After installation, verify these work:

**✅ Icon appears in toolbar**
- Should see eagle icon
- May need to click puzzle piece to pin it

**✅ Click icon shows Igor**
- Pop-up appears bottom-right
- Eagle animation visible
- Question text displays

**✅ Voice controls work**
- Click 🎤 - should request mic permission
- Click 🔊 - should read question aloud

**✅ Settings accessible**
- Right-click icon → Options
- Settings page loads
- Can save changes

**✅ No console errors**
- Press F12 on any page
- Check Console tab
- Should be no red errors

---

## Still Having Issues?

### Step 1: Clean Reinstall
```
1. Go to chrome://extensions/
2. Remove Igor completely
3. Close Chrome entirely
4. Reopen Chrome
5. Load unpacked again
```

### Step 2: Check Files
```
1. Make sure all files are present:
   - manifest.json ✅
   - background.js ✅
   - content.js ✅
   - igor.html ✅
   - igor-assistant.js ✅
   - icons/ folder with 3 PNGs ✅
   
2. Verify folder isn't read-only
3. Ensure no special characters in path
```

### Step 3: Try Different Browser
```
1. Test in Microsoft Edge (Chromium-based)
2. If works in Edge, Chrome may need reset
3. Or try creating new Chrome profile
```

### Step 4: Update Chrome
```
1. chrome://settings/help
2. Check for updates
3. Restart if update available
```

---

## Quick Fixes Summary

| Problem | Quick Fix |
|---------|-----------|
| Icon error | ✅ FIXED - Reload extension |
| Nothing happens | Click on regular webpage, not chrome:// pages |
| Permission denied | Check chrome://extensions/ → Details → Permissions |
| Mic not working | Allow microphone permission when prompted |
| Voice not reading | Check volume, enable TTS in settings |
| Won't load | Use "Load unpacked", not drag/drop |
| Incognito issue | Enable in extension details |
| Looks broken | Clear cache, reload extension |

---

## Advanced Debugging

If you're comfortable with code:

**1. Check Console Logs**
```
F12 → Console tab
Look for error messages
Note the line numbers
```

**2. Inspect Service Worker**
```
chrome://extensions/ → Igor → Inspect views: service worker
Console shows background script logs
```

**3. Validate Manifest**
```
Use online JSON validator
Paste manifest.json content
Check for syntax errors
```

**4. Check Permissions**
```
Developer Tools → Application → Storage
Verify storage permissions granted
```

---

## Platform-Specific Notes

**Windows:**
- May need to "Unblock" files (Right-click → Properties)
- Check antivirus isn't blocking

**macOS:**
- May need to allow in Security preferences
- Gatekeeper warnings are normal

**Linux:**
- Ensure Chrome/Chromium is up to date
- Check file permissions (chmod 644 for files, 755 for dirs)

---

## Contact & Support

If nothing works:
1. ✅ Check all files are present
2. ✅ Try on different computer
3. ✅ Verify Chrome version (should be 88+)
4. ✅ Test with other extensions disabled

**System Requirements:**
- Chrome 88 or higher
- Windows 10+, macOS 10.14+, or Linux
- 50MB free disk space
- Internet connection (for voice recognition)

---

**The icon issue has been fixed! Your extension should now load perfectly! 💪🦅**
