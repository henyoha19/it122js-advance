 //an array of at least 5 items (objects), where each item has at least 4 attributes 

const cars = [
    { carname : 'toyota', year : '2020', color : 'red', type : 'sedan'},
    { carname : 'ford', year : '2019', color :'black', type : 'minivan'},
    { carname : 'nissan', year : '2018', color :'white', type : 'hatchback'},
    { carname : 'fiat', year : '2017', color : 'brown', type :'station wagen'},
    { carname : 'bmw', year : '2016', color : 'blue', type :'electric'}
    ];


    //an exported getAll method that returns all array items

         
    exports.getAll = () => {
        return cars;

    }