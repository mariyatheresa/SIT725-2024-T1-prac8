var express = require("express") 
var app = express()
var port =  2008;

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port,()=>{
console.log("server running on : "+port)
})
