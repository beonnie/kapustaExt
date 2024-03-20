chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

    sendResponse({msg: "EXT"});

});