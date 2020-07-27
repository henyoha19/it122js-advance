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


    exports.get = (carname) => {
        return cars.find((item) => {
            return item.carname === carname;
            return item.carname.toLowerCase() === carname.toLowerCase();
        });
    };
    
    exports.delete = (carname) => {
        // retain array length for later comparison after array modification
        const oldLength = cars.length;
        cars = cars.filter((item) => {
            return item.carname !== carname;
        });
        // if old & new array lengths differ, item was deleted
        return {deleted: oldLength !== cars.length, total: cars.length };
    };
    exports.add = (newCar) => {
        const oldLength = cars.length;
        // use existing get() method to check if car is already in our list
        let found = this.get(newCar.carname);
        if (!found) {
            cars.push(newCar);
        }
        // if old & new array lengths differ, item was added
        return {added: oldLength !== cars.length, total: cars.length };
    };
    
    