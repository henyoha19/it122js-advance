 //an array of at least 5 items (objects), where each item has at least 4 attributes 

const cars = [
    { carname : 'Toyota', year : '2020', color : 'red', type : 'sedan'},
    { carname : 'Ford', year : '2019', color :'black', type : 'minivan'},
    { carname : 'Nissan', year : '2018', color :'white', type : 'hatchback'},
    { carname : 'Fiat', year : '2017', color : 'brown', type :'station wagen'},
    { carname : 'BMW', year : '2016', color : 'blue', type :'electric'}
    ];


    //an exported getAll method that returns all array items

         
    exports.getAll = () => {
        return cars;

    }
    exports.getlistcar = year => {
        const car = cars.find(cars => cars.year === year);
        return cars;
    }