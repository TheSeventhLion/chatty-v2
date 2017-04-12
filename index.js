var messages= []

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static('assets'))
app.use(bodyParser.json())
var port = 6001


app.get('/messages' , function (req, res, next){
    res.status(200).json({ messages : messages });

});



app.post('/messages', function (req, res, next) {
    console.log(req.body, "<~~this is the REQ.BODY object");
    // messages.push(req.body.message)
    messages.push({ message: req.body.message, time: new Date() }); 
  res.status(200).json({ messages : messages });
});


app.listen(6001, function (){
    console.log("Go ahead, Im listening!")
})

