
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.borrowButton').addEventListener('click', borrowClickHandler);
});

function  borrowClickHandler(){
  chrome.tabs.create({"url": "http://localhost:8090/kp/v1/getBorrow"});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.lendButton').addEventListener('click', lendClickHandler);
});

function  lendClickHandler(){
  chrome.tabs.create({"url": "http://localhost:8090/kp/v1/getLend"});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.renderButton').addEventListener('click', renderClickHandler);
});

function  renderClickHandler(){
  
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.dealButton').addEventListener('click', dealClickHandler);
});

function  dealClickHandler(){
  
}