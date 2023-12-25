// background.js

var audio = new Audio('white_noise.mp3');

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({ playing: false });
});

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
