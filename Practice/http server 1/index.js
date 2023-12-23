const { log } = require('console');
const express = require('express')
const fs = require('fs')
let app = express();
let port = 3000;

app.get('/', 
function (req,res){
   res.send(
      // fs.readFile('package.json','utf-8', function (err,data){
      // console.log(data)
   // })
   "hello world"
   )
})


app.listen(port)