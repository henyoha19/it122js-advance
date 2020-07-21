'use strict'
const expect = require("chai").expect;
const cars = require("./data.js");
//get car

describe("cars module", () => {
    it("returns requested cars", () => {
        const result = cars.get("Toyota");
        expect(result).to.deep.equal({carname: "Toyota", year:"2020", color:"red", type: "sedan"});
    });


    it("fails to return an w/ invalid cars", () => {
        const result = cars.get("fake");
        expect(result).to.be.undefined;
    });

//add new car

    it("adds a new cars", () => {
        const result = cars.add({carname: "Lexus", year:"2019", color:"black", type: "van"});
        expect(result.added).to.be.true;
    });
    it("fails to add an existing cars", () => {
        const result = cars.add({carname: "Toyota", year:"2020", color:"red", type: "sedan"});
        expect(result.added).to.be.false;
    });

//delete existing car

    it("deletes an existing cars", () => {
        const result = cars.delete("Toyota");
        expect(result.deleted).to.be.true;
    });
    it("fails to delete an invalid cars", () =>  {
        const result = cars.delete("Mazda");
        expect(result.deleted).to.be.false;
    });
});
 