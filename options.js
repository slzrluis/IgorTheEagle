// Options page JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Load saved settings
  loadSettings();
  
  // Save button
  document.getElementById('save-btn').addEventListener('click', saveSettings);
  
  // Reset button
  document.getElementById('reset-btn').addEventListener('click', resetSettings);
  
  // Uninstall button
  document.getElementById('uninstall-btn').addEventListener('click', uninstallExtension);
});

function loadSettings() {
  chrome.storage.sync.get(['settings'], (result) => {
    if (result.settings) {
      const settings = result.settings;
      
      document.getElementById('form-url').value = settings.formUrl || '';
      document.getElementById('voice-enabled').checked = settings.voiceEnabled !== false;
      document.getElementById('microphone-enabled').checked = settings.microphoneEnabled !== false;
      document.getElementById('click-enabled').checked = settings.clickEnabled !== false;
      
      const voiceType = settings.voiceType || 'deep-male';
      document.querySelector(`input[name="voice-type"][value="${voiceType}"]`).checked = true;
    }
  });
}

function saveSettings() {
  const settings = {
    formUrl: document.getElementById('form-url').value,
    voiceEnabled: document.getElementById('voice-enabled').checked,
    microphoneEnabled: document.getElementById('microphone-enabled').checked,
    clickEnabled: document.getElementById('click-enabled').checked,
    voiceType: document.querySelector('input[name="voice-type"]:checked').value
  };
  
  chrome.storage.sync.set({ settings }, () => {
    // Show success message
    const alert = document.getElementById('save-alert');
    alert.classList.add('show');
    
    setTimeout(() => {
      alert.classList.remove('show');
    }, 3000);
  });
}

function resetSettings() {
  if (confirm('Are you sure you want to reset all settings to defaults?')) {
    const defaultSettings = {
      formUrl: '',
      voiceEnabled: true,
      clickEnabled: true,
      voiceType: 'deep-male',
      microphoneEnabled: true
    };
    
    chrome.storage.sync.set({ settings: defaultSettings }, () => {
      loadSettings();
      
      const alert = document.getElementById('save-alert');
      alert.textContent = 'Settings reset to defaults! 🔄';
      alert.classList.add('show');
      
      setTimeout(() => {
        alert.classList.remove('show');
        alert.textContent = 'Settings saved successfully! 💪';
      }, 3000);
    });
  }
}

function uninstallExtension() {
  const confirmed = confirm(
    '⚠️ Are you sure you want to uninstall Igor Assistant?\n\n' +
    'This will remove the extension and all saved data. You can always reinstall it later.'
  );
  
  if (confirmed) {
    // Clear all storage
    chrome.storage.sync.clear();
    chrome.storage.local.clear();
    
    // Show uninstall instructions
    alert(
      '📋 To complete the uninstall:\n\n' +
      '1. Go to chrome://extensions/\n' +
      '2. Find "Igor - Your Eagle Assistant"\n' +
      '3. Click "Remove"\n\n' +
      'Igor says: Thanks for using me, champ! Stay strong! 💪🦅'
    );
  }
}
