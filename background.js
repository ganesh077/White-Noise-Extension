// background.js

var audio = new Audio('white_noise.mp3');

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({ playing: false });
  addAudioEventListeners();
});

function addAudioEventListeners() {
  audio.addEventListener('ended', function () {
    chrome.storage.local.get('playing', function (data) {
      if (data.playing) {
        audio.currentTime = 0; // Reset the playback position
        audio.play();
      }
    });
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'togglePlay') {
    chrome.storage.local.get('playing', function (data) {
      if (data.playing) {
        audio.pause();
      } else {
        audio.play();
      }
      chrome.storage.local.set({ playing: !data.playing });
    });
  }
});

// Add this line to restart audio playback if the extension is reloaded
addAudioEventListeners();

