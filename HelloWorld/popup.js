// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

document.addEventListener('DOMContentLoaded', function() {
    console.log('Loaded DOMContentLoaded');
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
       debugger;
        chrome.tabs.sendRequest(tabs[0].id, { action: "sendMeDOM" },traverseKendo);
    });
});
function traverseKendo(dom) {
  console.log(new Date());
  domGL = dom;
  console.log(dom);
  $.each($(dom).find('[data-role]'),function(i,v){ console.log(v); });
}
