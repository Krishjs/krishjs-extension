console.log('Content scripts');
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  alert('Content');
    setTimeout(function() {
      if (msg.action === 'sendMeDOM') {
        console.log(document);
        sendResponse(document.all[0].outerHTML);
    }
  }, 5000);
});
