'use strict'

const Car = require("../models/car");

//Car.find({}, (err, result) => {
 //output error if one occured
//if (err) {
   //console.log(err);
//} else {
    //otherwise output the array of documents
  //console.log(result);

//}
//return

//});
//all records
Car.find({}).lean()
  .then((cars) => {
    console.log(cars);
  })
  .catch(err => next(err))
// single records
Car.find({"carname": "toyota"}).lean() 
  .then((cars) => { 
    console.log(cars); 
  }) 
    .catch(err => next(err));
  
 /*
  
'use strict'

const Car = require("../models/car");

//Car.find({}, (err, result) => {
 //output error if one occured
//if (err) {
   //console.log(err);
//} else {
    //otherwise output the array of documents
  //console.log(result);

//}
//return

//});
//all records
Car.find({}).lean()
  .then((cars) => {
    console.log(cars);
  })
  .catch(err => next(err))
// single records
Car.find({"carname": "toyota"}).lean() 
  .then((cars) => { 
    console.log(cars); 
  }) 
    .catch(err => next(err));
  
 
  */

  