// Content script to inject Igor into the page
let igorFrame = null;
let igorVisible = false;

// Prevent multiple injections
if (window.igorExtensionLoaded) {
  console.log('Igor already loaded');
} else {
  window.igorExtensionLoaded = true;
  
  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Content script received message:', request);
    
    if (request.action === 'toggleIgor') {
      console.log('Toggle Igor - current state:', igorVisible);
      if (igorVisible) {
        hideIgor();
      } else {
        showIgor();
      }
      sendResponse({ success: true });
    }
    return true;
  });
  
  // Listen for messages from Igor iframe
  window.addEventListener('message', (event) => {
    if (event.data.action === 'closeIgor') {
      hideIgor();
    }
  });
}

function showIgor() {
  console.log('showIgor called');
  
  if (igorFrame) {
    console.log('Igor frame exists, showing it');
    igorFrame.style.display = 'block';
    igorVisible = true;
    return;
  }
  
  console.log('Creating new Igor frame');
  
  // Create the Igor iframe
  igorFrame = document.createElement('iframe');
  igorFrame.id = 'igor-assistant-frame';
  igorFrame.src = chrome.runtime.getURL('igor.html');
  
  console.log('Igor URL:', igorFrame.src);
  
  igorFrame.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 320px;
    height: 400px;
    border: none;
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    z-index: 2147483647;
    background: transparent;
  `;
  
  // Make sure body exists
  if (!document.body) {
    console.error('Document body not found!');
    return;
  }
  
  document.body.appendChild(igorFrame);
  igorVisible = true;
  console.log('Igor frame appended to body');
  
  // Debug: Check if iframe was added
  setTimeout(() => {
    const check = document.getElementById('igor-assistant-frame');
    console.log('Igor frame check:', check ? 'Found' : 'Not found');
  }, 100);
}

function hideIgor() {
  if (igorFrame) {
    igorFrame.style.display = 'none';
    igorVisible = false;
  }
}
