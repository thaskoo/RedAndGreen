var assert = {
      //i:0,
      //pass:0,

       equals: function(massage,result){
            

            var Square = new RedOrGreen("Square");
            if(massage === result) {
                  Square.makeGreen();
            }
            else{
                  Square.makeRed();          
      }
}
}
            
var TestMyCode = { 
      run:function(name,test){
            this.name = name;
            test(assert);
      }
};

      