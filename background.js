/**
 * Universal Reader Mode - Background Service Worker
 * 
 * This service worker handles the extension's background tasks including
 * extension installation, tab updates, and message passing between
 * content scripts and popup.
 * 
 * @version 1.0.0
 * @author 010io
 */

// Extension installation handler
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Universal Reader Mode installed', details);
  
  // TODO: Set up default settings
  // TODO: Initialize extension state
});

// Tab activation handler
chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log('Tab activated', activeInfo.tabId);
  
  // TODO: Update extension state for active tab
});

// Tab update handler
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    console.log('Tab updated', tabId);
    
    // TODO: Check if reader mode should be applied
    // TODO: Update extension icon state
  }
});

// Message handler for communication with content scripts and popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received', request);
  
  switch (request.action) {
    case 'getSettings':
      // TODO: Retrieve and return extension settings
      sendResponse({ success: true, data: {} });
      break;
      
    case 'saveSettings':
      // TODO: Save extension settings
      sendResponse({ success: true });
      break;
      
    case 'toggleReaderMode':
      // TODO: Toggle reader mode for active tab
      sendResponse({ success: true });
      break;
      
    default:
      sendResponse({ success: false, error: 'Unknown action' });
  }
  
  // Return true to indicate we will send a response asynchronously
  return true;
});

// Extension action (toolbar button) click handler
chrome.action.onClicked.addListener((tab) => {
  console.log('Extension action clicked for tab', tab.id);
  
  // TODO: Toggle reader mode
  // TODO: Update extension icon
});

// Context menu creation (future feature)
// chrome.contextMenus.create({
//   id: 'readerMode',
//   title: 'Enable Reader Mode',
//   contexts: ['page']
// });

console.log('Universal Reader Mode background script loaded');
