(function () {
  
	if(document.getElementById('mySquare').style.backgroundColor === 'green') {
  	 	window.alert('success');
  }
 	 else {
    	window.alert('failure');
  }
   setBackgroundColor('mySquare','red');
     if(document.getElementById('mySquare').style.backgroundColor === 'red') {
      	window.alert('success');
  }
 	
	 else {
    	window.alert('failure');
   }
 })();