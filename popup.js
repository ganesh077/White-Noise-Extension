// popup.js

document.addEventListener('DOMContentLoaded', function () {
    var playButton = document.getElementById('playButton');
  
    playButton.addEventListener('click', function () {
      chrome.runtime.sendMessage({ action: 'togglePlay' });
    });
  });
  