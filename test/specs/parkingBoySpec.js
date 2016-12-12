var expect = require('chai').expect;
var ParkingLot = require("../../src/parkingLot.js");
var Car = require("../../src/car.js");
var ParkingBoy = require("../../src/parkingBoy.js");

describe("ParkingBoy", function () {
    var car1, car2, car3;

    beforeEach(function(){
        car1 = new Car("001");
        car2 = new Car("002");
        car3 = new Car("003");
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

        it("should be able to pick up the car that is parked in the parking lot", function(){
            var parkingLot = new ParkingLot(1);
            var parkingBoy = new ParkingBoy([parkingLot]);
            var parkingStub = parkingBoy.park(car1);

            expect(parkingBoy.pickUp(parkingStub)).to.equal(car1);
        });

        it("should not be able to pick up the car that has picked", function(){
            var parkingLot = new ParkingLot(1);
            var parkingBoy = new ParkingBoy([parkingLot]);
            var parkingStub = parkingBoy.park(car1);

            parkingLot.pickUp(parkingStub);

            expect(parkingBoy.pickUp(parkingStub)).to.be.undefined;
        });
    });

    describe("when there are two parking lots", function(){
        it("should be able to park the first car to the first parking lot", function(){
            var firstParkingLot = new ParkingLot(1);
            var secondParkingLot = new ParkingLot(1);
            var parkingBoy = new ParkingBoy([firstParkingLot, secondParkingLot]);

            var parkingStub = parkingBoy.park(car1);

            expect(firstParkingLot.pickUp(parkingStub)).to.equal(car1);
            expect(secondParkingLot.pickUp(parkingStub)).to.be.undefined;
        });

        it("should be able to park a car to the second parking lot when first parking lot is full", function(){
            var firstParkingLot = new ParkingLot(1);
            var secondParkingLot = new ParkingLot(1);
            var parkingBoy = new ParkingBoy([firstParkingLot, secondParkingLot]);
            parkingBoy.park(car1);

            var parkingStub = parkingBoy.park(car2);
            expect(secondParkingLot.pickUp(parkingStub)).to.equal(car2);
        });

        it("should not be able to park a car when all parking lots are full", function(){
            var firstParkingLot = new ParkingLot(1);
            var secondParkingLot = new ParkingLot(1);
            var parkingBoy = new ParkingBoy([firstParkingLot, secondParkingLot]);
            parkingBoy.park(car1);
            parkingBoy.park(car2);

            var parkingStub = parkingBoy.park(car3);
            expect(parkingStub).to.be.undefined;
        });

        it("should park a car to the first parking lot when the first has available place again", function(){
            var firstParkingLot = new ParkingLot(1);
            var secondParkingLot = new ParkingLot(1);
            var parkingBoy = new ParkingBoy([firstParkingLot, secondParkingLot]);
            var parkingStub1 = parkingBoy.park(car1);
            parkingBoy.park(car2);
            firstParkingLot.pickUp(parkingStub1);

            var parkingStub = parkingBoy.park(car3);
            expect(parkingBoy.pickUp(parkingStub)).to.equal(car3);
        });

        it("should be able to pick up the car that is parked in the parking lot", function(){
            var firstParkingLot = new ParkingLot(1);
            var secondParkingLot = new ParkingLot(1);
            var parkingBoy = new ParkingBoy([firstParkingLot, secondParkingLot]);
            var parkingStub = parkingBoy.park(car1);

            expect(parkingBoy.pickUp(parkingStub)).to.equal(car1);
        });

        it("should not be able to pick up the car that has picked", function(){
            var firstParkingLot = new ParkingLot(1);
            var secondParkingLot = new ParkingLot(1);
            var parkingBoy = new ParkingBoy([firstParkingLot, secondParkingLot]);
            var parkingStub = parkingBoy.park(car1);
            parkingBoy.pickUp(parkingStub);

            expect(parkingBoy.pickUp(parkingStub)).to.be.undefined;
        });
    });
});