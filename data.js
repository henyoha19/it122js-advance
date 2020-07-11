//an array of at least 5 items (objects), where each item has at least 4 attributes 

let cars = [
    { carname : 'toyota', year : '2020', color : 'red', type : ['sedan', 'suv', 'sports'] },
    { carname : 'ford', year : '2019', color :'black', type : ['minivan', 'sports', 'coupe'] },
    { carname : 'nissan', year : '2018', color :'white', type : ['hatchback', 'convertible', 'pickup'] },
    { carname : 'fiat', year : '2017', color : 'brown', type :['station wagen', 'van', 'suv'] },
    { carname : 'bmw', year : '2016', color : 'blue', type :['electric', 'hybrid', 'hatchback'] },
    ];


    //an exported getAll method that returns all array items

    export function     getAll() {
        return cars; 
        }