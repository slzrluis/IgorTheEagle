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
chrome.action.onClicked.addListener(async (tab) => {
  console.log('Extension icon clicked! Tab ID:', tab.id, 'URL:', tab.url);
  
  // Inject Igor into the current tab
  try {
    console.log('Attempting to send message to tab...');
    await chrome.tabs.sendMessage(tab.id, { action: 'toggleIgor' });
    console.log('Message sent successfully');
  } catch (error) {
    console.log('Message failed, injecting content script:', error);
    
    // Content script not ready yet, inject it first
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      });
      console.log('Content script injected');
      
      // Small delay to let content script initialize
      setTimeout(() => {
        chrome.tabs.sendMessage(tab.id, { action: 'toggleIgor' }).catch((err) => {
          console.log('Could not send message to tab:', err);
        });
      }, 100);
    } catch (err) {
      console.error('Cannot inject into this page:', err);
      alert('Igor cannot run on this page. Try a regular website like google.com');
    }
  }
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
