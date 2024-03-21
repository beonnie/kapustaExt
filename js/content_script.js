const a = function(){
   const b = document.querySelectorAll('div');
   console.log(b.length);
   
   const script = document.createElement('script');
   script.innerText = 'const a = document.querySelectorAll(".more-offers-block-btn-block");a[1].firstChild.click();a[1].firstChild.click();a[1].firstChild.click();a[1].firstChild.click();';
   b[40].append(script);
  

   
}

a();

