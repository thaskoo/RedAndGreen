var rg = new RedOrGreen("Thandokazi");
   
  

  rg.makeRed("Thandokazi");
   if(document.getElementById("Thandokazi").style.backgroundColor === 'red'){
   		window.alert("success");
   }else{
   	window.alert("Error");
   }
  rg.makeGreen("Thandokazi");
  if(document.getElementById("Thandokazi").style.backgroundColor === 'green'){
   		window.alert("success");
   }else{
   	window.alert("Error");
   }
   