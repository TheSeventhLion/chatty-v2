const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static('assets'))
app.use(bodyParser.json())

const messages= ["default" , "messages"]




app.get('/messages' , function (req,res){
    res.status(200).json({ anything : messages });

});

app.post('/messages', function (req, res, next) {
    console.log(req.body, "<~~this is the REQ.BODY object");
    // messages.push(req.body.message)
    messages.push({ message: req.body.message, time: new Date() }); 
  res.status(200).json({ anything : messages });
});









app.listen(4000, function (){
    console.log("Go ahead, Im listening!")
})

