var rg = new RedOrGreen("Thandokazi");
   
  

  rg.makeRed("Thandokazi");
   if(document.getElementById("Thandokazi").style.backgroundColor === 'red'){
   		window.alert("myElement background should be red now");
   }else{
   	window.alert("Error");
   }
  rg.makeGreen("Thandokazi");
  if(document.getElementById("Thandokazi").style.backgroundColor === 'green'){
   		window.alert("myElement background should be green now");
   }else{
   	window.alert("Error");
   }
   