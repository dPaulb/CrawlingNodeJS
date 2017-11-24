var casper = require('casper').create({
    verbose:true,
    logLevel:"debug",
    // viewportSize: { width: 414, height: 736 }
});
var fs = require('fs');
casper.start();

casper.open("URL");
casper.wait(5000, function(){
    this.echo("I've waited for 1 second");
});

casper.then(
    function(){
        casper.capture('captured.png', {
            top:0, left : 0, width : 1024, height : 768
        });
        fs.write("./shoppingmallIndex.html", this.getHTML(), "w");

    }
);

casper.run();

