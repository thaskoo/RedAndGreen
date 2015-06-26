var assert = {
      passed: false,

       equals: function(message, results, newmsg) {

            if (message === results) {
                  this.passed = true;
        }
        else {
                  this.passed = false;
      
 }

}

}


    var TestMyCode = {
        runCount: 0,
    testPassedCount: 0,

   run: function(name,test) {

        this.runCount = this.runCount + 1;

        var newDiv = document.createElement("div");

       newDiv.id = "div" + this.runCount;
       newDiv.style.height = "300px";
       newDiv.style.width = "300px";
       newDiv.style.border = "5px solid black";
       newDiv.style.display = "inline-block";

        var testResults = document.getElementById("testResults");
        testResults.appendChild(newDiv);

           var rg = new RedOrGreen(newDiv.id);
           this.name = name;
             test(assert);
             if(assert.passed){
            rg.makeGreen();
            newDiv.innerHTML = name;
            this.testPassedCount = this.testPassedCount +1;
       }
              else {
                    rg.makeRed();
                    newDiv.innerHTML = name;
                   }

            document.getElementById("testStatus").innerHTML = "Number of passed tests:" + this.testPassedCount + " out of " + this.runCount;
            //document.body.appendChild(testResults);

            //show the progress
           // assert.showProgress();
          }

        }


