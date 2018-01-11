var express = require('express');
var formidable = require('formidable');
var app = express();


app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post('/file', (req,res) => {
    var form = new formidable.IncomingForm();
    form.parse(req);
    
    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    res.send("Received.");
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});
