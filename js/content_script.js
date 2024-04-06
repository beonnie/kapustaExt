/*
let borrowButton;

setTimeout(()=>{
    borrowButton = document.querySelectorAll('.more-offers-block-btn-block')[1].firstChild;
}, 1000)



window.addEventListener('load', function(){
    this.alert('load')


    const getBorrowRecord = (mutations) => {
        mutations.forEach(function(mutation) {
            console.log(mutation);
        });
    }
    
    const mutationObserver = new MutationObserver(getBorrowRecord);
      
    const borrowDiv = document.querySelectorAll('.offers-block')[1];
    
    this.alert(borrowDiv)

    mutationObserver.observe(borrowDiv, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
    })

});
*/

const loadDead = ()=> {

}

const renderOffer = ()=> {

}

const renderPage = ()=>{

}

let loadedElements = 0;
window.addEventListener('load', function(){

    const getBorrowRecord = (mutations) => {
        loadedElements++;
        if(loadedElements >= 43) renderPage();
    }
    
    const mutationObserver = new MutationObserver(getBorrowRecord);
    const appDiv = document.querySelectorAll('#app')[0];

    mutationObserver.observe(appDiv, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
    })

});