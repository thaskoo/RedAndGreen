TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello world!", result, "testing hello world function");
});


TestMyCode.run("testing Kaziey function", function(assert){
    var result = Kaziey();
    // is the result as we expected?
    assert.equals("Kaziey!", result, "testing Kaziey function");
});

TestMyCode.run("testing Sboshy function", function(assert){
    var result = Sboshy();
    // is the result as we expected?
    assert.equals("Sboshy", result, "testing Sboshy function");
});
