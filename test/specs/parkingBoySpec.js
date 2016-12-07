var expect = require('chai').expect;
var ParkingLot = require("../../src/parkingLot.js");
var Car = require("../../src/car.js");
var ParkingBoy = require("../../src/parkingBoy.js");

describe("ParkingBoy", function () {
    var parkingLot;
    var parkingBoy;

    beforeEach(function(){
        parkingLot = new ParkingLot(1);
        parkingBoy = new ParkingBoy(parkingLot);
    });

    it("should park a car when there is only one parking lot ", function(){
        var car = new Car("001");
        var parkingStub = parkingBoy.park(car);
        expect(parkingLot.pickUp(parkingStub)).to.equal(car);
    });
});