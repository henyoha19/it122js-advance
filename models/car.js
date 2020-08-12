const mongoose = require('mongoose');

// remote db connection settings. For security, connectionString should be in a separate file not committed to git
const connectionString = "mongodb+srv://dbuser:741089@cluster0.gwal3.mongodb.net/cars?retryWrites=true&w=majority";
// local db connection settings 
// const ip = process.env.ip || '127.0.0.1';
// const connectionString = 'mongodb://' +ip+ '/<DB_NAME>';

mongoose.connect(connectionString, { dbName: "cars", useNewUrlParser: true }); 

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define Car model in JSON key/value pairs
// values indicate the data type of each key
const mySchema = mongoose.Schema({
 carname: {type: String, required: true },
 color: String,
 type: String 
}); 

module.exports = mongoose.model('Car', mySchema, 'carlist');
