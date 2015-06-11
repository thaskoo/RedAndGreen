var rg = new RedOrGreen("Thandokazi");
   
  

  rg.makeRed("Thandokazi");
   if(document.getElementById("Thandokazi").style.backgroundColor === 'red'){
   		window.alert("The square change to red");
   }else{
   	window.alert("Error");
   }
  rg.makeGreen("Thandokazi");
  if(document.getElementById("Thandokazi").style.backgroundColor === 'green'){
   		window.alert("The square change to green");
   }else{
   	window.alert("Error");
   }
   