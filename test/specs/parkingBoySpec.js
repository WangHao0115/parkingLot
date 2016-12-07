var expect = require('chai').expect;
var ParkingLot = require("../../src/parkingLot.js");
var Car = require("../../src/car.js");
var ParkingBoy = require("../../src/parkingBoy.js");

describe("ParkingBoy", function () {
    var car1, car2, car3, car4, car5;

    beforeEach(function(){
        car1 = new Car("001");
        car2 = new Car("001");
        car3 = new Car("001");
        car4 = new Car("001");
        car5 = new Car("001");
    });

    describe("when there is only one parking lot", function(){

        it("should be able to park a car", function(){
            var parkingLot = new ParkingLot(1);
            var parkingBoy = new ParkingBoy([parkingLot]);

            var parkingStub = parkingBoy.park(car1);

            expect(parkingLot.pickUp(parkingStub)).to.equal(car1);
        });

        it("should not be able to park a car when the parking is full", function(){
            var parkingLot = new ParkingLot(1);
            var parkingBoy = new ParkingBoy([parkingLot]);
            parkingBoy.park(car1);

            var parkingStub = parkingBoy.park(car2);

            expect(parkingLot.pickUp(parkingStub)).to.be.undefined;
        });
    });

    describe("when there are two parking lots", function(){
        it("should be able to park the first car to the first parking lot", function(){
            var firstParkingLot = new ParkingLot(1);
            var secondParkingLot = new ParkingLot(1);
            var parkingBoy = new ParkingBoy([firstParkingLot, secondParkingLot]);

            var parkingStub = parkingBoy.park(car1);

            expect(firstParkingLot.pickUp(parkingStub)).to.equal(car1);
            expect(firstParkingLot.pickUp(parkingStub)).to.be.undefined;
        });
    });

});