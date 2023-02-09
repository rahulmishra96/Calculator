const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/",function(req , res){
    var num1 = Number(req.body.weight);
    var num2 = Number(req.body.height);
    var calculate = num1/Math.pow(num2,2);
    res.send("Your current BMI is "+calculate);
});

app.listen(3000,function(){
console.log("server is running on port 3000");
});