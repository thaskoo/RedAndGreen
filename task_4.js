
 var count=0;
	var colors=["#008000", "#FF0000","#008000", "#FF0000"];
	
	function changeColor(){
		if(count>=colors.length-1){
			count=0;
		}
		else{
			count++;
		}
		var col=document.getElementById("Square");
		col.style.backgroundColor=colors[count];
		
	    var text=document.getElementById("colorChange").firstChild;
		text.data=text.data=="Make Green"?"Make Red":"Make Green";
}