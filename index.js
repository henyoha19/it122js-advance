const car = require("./data.js");
//web server on port 3000 and respond the request

import { createServer } from "http"; 
createServer((req,res) => {
  const path = req.url.toLowerCase();

  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('This is my Home page');
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
 