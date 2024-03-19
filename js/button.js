const renderButton = document.getElementsByClassName("renderButton")[0];
const dealButton = document.getElementsByClassName("dealButton")[0];
const borrowButton = document.getElementsByClassName("borrowButton")[0];
const lendButton = document.getElementsByClassName("lendButton")[0];

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.borrowButton').addEventListener('click', clickHandler);
    main();
  });

function  clickHandler(){
    window.location.replace("fff")
}