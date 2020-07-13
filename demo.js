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


/*const cars = [
    { carname : 'toyota', year : '2020', color : 'red', type : ['sedan', 'suv', 'sports'] },
    { carname : 'ford', year : '2019', color :'black', type : ['minivan', 'sports', 'coupe'] },
    { carname : 'nissan', year : '2018', color :'white', type : ['hatchback', 'convertible', 'pickup'] },
    { carname : 'fiat', year : '2017', color : 'brown', type :['station wagen', 'van', 'suv'] },
    { carname : 'bmw', year : '2016', color : 'blue', type :['electric', 'hybrid', 'hatchback'] }
    ];*/