'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const Car = require("./models/car");


//const cars = require("./data.js");

const app = express();

//configure Express app
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions
app.use(bodyParser.json());
app.use('/api', require('cors')());
app.use ((err,req,res,next) => {
  console.log(err);
});

//set template engine
const exphbs = require("express-handlebars"); // should be at top of module 
//const car = require("./models/car.js");
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");


//let listCars = cars.getAll();

app.get('/', (req,res, next) => {
  Car.find((err,cars) => {
      console.log(cars)
      if (err) return next(err);
      res.render('home', {cars: JSON.stringify(cars)});
  });
});


// send plain text response
 app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About page');
 });


 ///API 

//get single items

 app.get('/api/cars/:carname', (req, res, next) => {
  let carname = req.params.carname;
  console.log(carname);
  Car.findOne({carname: carname}, (err, result) => {
      if (err || !result) return next(err);
      res.json( result );    
  });
});

//get all items

app.get('/api/cars', (req,res, next) => {
  Car.find((err,results) => {
      if (err || !results) return next(err);
      res.json(results);
  });
});

// delete an item
app.get('/api/delete/:id', (req,res, next) => {
  Book.deleteOne({"_id":req.params.id }, (err, result) => {
      if (err) return next(err);
      // return # of items deleted
      console.log(result)
      res.json({"deleted": result});
  });
});


// add or update an item

app.post('/api/add/', (req,res, next) => {
  // find & update existing item, or add new
  console.log(req.body)
  if (!req.body._id) { // insert new document

      let car = new Car({carname:req.body.carname,color:req.body.color,type:req.body.type});
      car.save((err,newCar) => {
          if (err) return next(err);
          console.log(newCar)
          res.json({updated: 0, _id: newCar._id});
      });
  } else { // update existing document
      Car.updateOne({ _id: req.body._id}, {carname:req.body.carname, color: req.body.color, type: req.body.type }, (err, result) => {
          if (err) return next(err);
          res.json({updated: result.nModified, _id: req.body._id});
      });
  }
});

app.get('/api/add/:carname/:color/:type', (req,res, next) => {
  // find & update existing item, or add new 
  let carname = req.params.carname;
  car.update({ carname: carname}, {carname:carname, color: req.params.color, type: req.params.type }, {upsert: true }, (err, result) => {
      if (err) return next(err);
      // nModified = 0 for new item, = 1+ for updated item 
      res.json({updated: result.nModified});
  });
});


app.get('/api/details', (req, res) => {
  return Car.findOne({carname:req.query.carname}).lean()
  .then((cars) => {
    res.json(cars);
  })
  .catch(err => next(err));
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






