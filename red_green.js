function RedOrGreen(Square){
	
	this.makeRed = function(){
      	document.getElementById("Square").style.background = "red";
    };

    this.makeGreen = function() {
      	document.getElementById("Square").style.background = "green";
  	}
}