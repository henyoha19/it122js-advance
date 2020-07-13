const cars = require("./data.js");
//get all list of car
let listCars = cars.getAll();
//web server on port 3000 and respond the request

const http = require("http");
http.createServer((req,res) => {
  const path = req.url.toLowerCase();

  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('This is my Home page \n' + 'arraylenght:'+ listCars.length);
      break;

    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About page \n' + 'this is all about my page');
      break;

    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Page Not found');
      break;
    }
}).listen(process.env.PORT || 3000);
 