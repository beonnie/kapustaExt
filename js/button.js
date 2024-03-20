
  document.querySelector('.borrowButton').addEventListener('click', borrowClickHandler);

function  borrowClickHandler(){
  chrome.tabs.create({"url": "http://localhost:8090/kp/v1/getBorrow"});
}

document.querySelector('.lendButton').addEventListener('click', lendClickHandler);

function  lendClickHandler(){
  chrome.tabs.create({"url": "http://localhost:8090/kp/v1/getLend"});
}


document.querySelector('.renderButton')
  .addEventListener('click', function() {
     chrome.tabs.query({
        active: true,
        currentWindow: true
     }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
           method: "changePage"
        }, function(response) {
           if (response.method === "changePage") {
              alert("Succeeded with " + response.method);
           }
        });
     });
})


document.querySelector('.dealButton').addEventListener('click', dealClickHandler);

function  dealClickHandler(){
  
}