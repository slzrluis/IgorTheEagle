// Background service worker for Igor Assistant
chrome.runtime.onInstalled.addListener(() => {
  console.log('Igor Assistant installed!');
  
  // Set default settings
  chrome.storage.sync.get(['settings'], (result) => {
    if (!result.settings) {
      chrome.storage.sync.set({
        settings: {
          formUrl: '',
          voiceEnabled: true,
          clickEnabled: true,
          voiceType: 'deep-male',
          microphoneEnabled: true
        }
      });
    }
  });
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  // Inject Igor into the current tab
  chrome.tabs.sendMessage(tab.id, { action: 'toggleIgor' });
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getSettings') {
    chrome.storage.sync.get(['settings'], (result) => {
      sendResponse({ settings: result.settings });
    });
    return true; // Will respond asynchronously
  }
  
  if (request.action === 'saveFormResponse') {
    // Store form responses temporarily
    chrome.storage.local.get(['formResponses'], (result) => {
      const responses = result.formResponses || [];
      responses.push({
        timestamp: Date.now(),
        data: request.data
      });
      chrome.storage.local.set({ formResponses: responses });
    });
    sendResponse({ success: true });
    return true;
  }
});
