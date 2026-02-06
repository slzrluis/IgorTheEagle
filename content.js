// Content script to inject Igor into the page
let igorFrame = null;
let igorVisible = false;

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleIgor') {
    if (igorVisible) {
      hideIgor();
    } else {
      showIgor();
    }
  }
});

// Listen for messages from Igor iframe
window.addEventListener('message', (event) => {
  if (event.data.action === 'closeIgor') {
    hideIgor();
  }
});

function showIgor() {
  if (igorFrame) {
    igorFrame.style.display = 'block';
    igorVisible = true;
    return;
  }
  
  // Create the Igor iframe
  igorFrame = document.createElement('iframe');
  igorFrame.id = 'igor-assistant-frame';
  igorFrame.src = chrome.runtime.getURL('igor.html');
  igorFrame.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    height: 450px;
    border: none;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    z-index: 2147483647;
    background: transparent;
  `;
  
  document.body.appendChild(igorFrame);
  igorVisible = true;
}

function hideIgor() {
  if (igorFrame) {
    igorFrame.style.display = 'none';
    igorVisible = false;
  }
}
