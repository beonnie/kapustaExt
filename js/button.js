
document.querySelector('.borrowButton').addEventListener('click', borrowClickHandler);

function  borrowClickHandler(){
  chrome.tabs.create({"url": "http://localhost:8090/kp/v1/getBorrow"});
}

document.querySelector('.lendButton').addEventListener('click', lendClickHandler);

function  lendClickHandler(){
  chrome.tabs.create({"url": "http://localhost:8090/kp/v1/getLend"});
}



document.querySelector('.renderButton')
.addEventListener('click', function(){
   
   chrome.runtime.sendMessage({ greeting: 'hello'}, function(response){
      alert(response.msg)
   } )
   
})



 