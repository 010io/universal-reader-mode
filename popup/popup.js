/**
 * Universal Reader Mode - Popup Script
 * 
 * This script handles the popup interface functionality including
 * communication with background script and content scripts,
 * and managing user interactions.
 * 
 * @version 1.0.0
 * @author 010io
 */

// Popup functionality
(function() {
  'use strict';
  
  console.log('Universal Reader Mode popup script loaded');
  
  // DOM elements
  let toggleButton = null;
  
  // State
  let isReaderModeActive = false;
  let currentTab = null;
  
  /**
   * Initialize the popup interface
   */
  function initPopup() {
    // Get DOM elements
    toggleButton = document.getElementById('toggleReaderMode');
    
    if (toggleButton) {
      toggleButton.addEventListener('click', handleToggleClick);
    }
    
    // Get current tab and reader mode status
    getCurrentTab().then(tab => {
      currentTab = tab;
      updateButtonState();
    });
  }
  
  /**
   * Get the current active tab
   */
  function getCurrentTab() {
    return new Promise((resolve) => {
      if (chrome.tabs) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          resolve(tabs[0]);
        });
      } else {
        resolve(null);
      }
    });
  }
  
  /**
   * Handle toggle button click
   */
  function handleToggleClick() {
    if (!currentTab) {
      console.error('No current tab found');
      return;
    }
    
    // TODO: Send message to content script to toggle reader mode
    // TODO: Update button state based on response
    console.log('Toggle button clicked');
    
    // Placeholder functionality
    isReaderModeActive = !isReaderModeActive;
    updateButtonState();
  }
  
  /**
   * Update button state and text
   */
  function updateButtonState() {
    if (!toggleButton) return;
    
    if (isReaderModeActive) {
      toggleButton.textContent = 'Exit Reader Mode';
      toggleButton.style.background = '#e3f2fd';
    } else {
      toggleButton.textContent = 'Enter Reader Mode';
      toggleButton.style.background = '#f5f5f5';
    }
  }
  
  /**
   * Handle messages from background or content scripts
   */
  function handleMessage(request, sender, sendResponse) {
    switch (request.action) {
      case 'updatePopup':
        isReaderModeActive = request.active;
        updateButtonState();
        break;
        
      default:
        console.warn('Unknown message action:', request.action);
    }
  }
  
  // Listen for messages
  if (chrome.runtime) {
    chrome.runtime.onMessage.addListener(handleMessage);
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPopup);
  } else {
    initPopup();
  }
  
})();
