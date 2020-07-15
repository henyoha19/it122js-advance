'use strict'

const express = require("express");
const bodyParser = require("body-parser");

const cars = require("./data.js");

const app = express();

//set template engine
const exphbs = require("express-handlebars"); // should be at top of module 
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

// configure Express app 
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions


let listCars = cars.getAll();

app.get('/', (req, res) => {
  res.type('text/html');
  res.render('home', {cars: listCars});
});

app.get('/detail', (req, res) => {
  const carname = req.query.carname
  res.render('detail', {carname: carname, stats: cars.getlistcar(carname)});
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

 






