
document.querySelector('.borrowButton').addEventListener('click', borrowClickHandler);

function  borrowClickHandler(){
  chrome.tabs.create({"url": "http://localhost:8090/kp/v1/getBorrow"});
}

document.querySelector('.lendButton').addEventListener('click', lendClickHandler);

function  lendClickHandler(){
  chrome.tabs.create({"url": "http://localhost:8090/kp/v1/getLend"});
}




async function renderClickHandler(){

  setTimeout(()=>{
    const a = document.querySelectorAll('button');
    alert(a.length)
    }, 500)

}

document.querySelector('.renderButton').addEventListener('click', renderClickHandler);





 