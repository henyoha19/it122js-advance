//this is sample file
const http = require("http"); 
console.log("step 1") 

const fs = require("fs");
   fs.readFile("index.js", (err, data) => {
    console.log("step 2")
     if (err) return console.error(err);
     console.log(data.toString());
  })




http.createServer(
    (req,res) => {
        console.log("step2")
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Aloha world');
}).listen(process.env.PORT || 3000);

console.log("step3")