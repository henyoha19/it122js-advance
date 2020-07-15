'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions


// send static file as response
app.get('/', (req, res) => {
  res.type('text/html');
  res.sendFile(__dirname + '/public/home.html'); 
 });
 
 // send plain text response
 app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About page');
 });
 // define 404 handler
 app.use( (req,res) => {
  res.type('text/plain'); 
  res.status(404);
  res.send('404 - Not found');
 });

 app.listen(app.get('port'), () => {
  console.log('Express started'); 
 });

 app.get('/foo', (req,res,next) => {
  if(Math.random() < 0.5) return next();
  res.send('sometimes this');
});

app.get('/foo', (req,res) => {
  res.send('and sometimes that');
}); 


app.get('/user(user)?', (req,res) => {
  res.render('user');
});

app.get('/user/:user', (req, res) => {
  var info = users.find((user) => {
    return user.name = req.params.name;
  });
  if (!info) return next(); // will eventually fall through to 404
    res.send(info);
});

module.exports = function(app) {
  app.get('/', (req,res) => {
    app.render('home');
  });

  // other routes
};


