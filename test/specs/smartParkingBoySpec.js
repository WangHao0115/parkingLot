var expect = require('chai').expect;
var _ = require('lodash');
var ParkingLot = require("../../src/parkingLot.js");
var Car = require("../../src/car.js");
var SmartParkingBoy = require("../../src/smartParkingBoy.js");

describe("SmartParkingBoy", function () {
    var car1, car2, car3;

    beforeEach(function(){
        car1 = new Car("001");
        car2 = new Car("002");
        car3 = new Car("003");
    });

    describe("when there is only one parking lot", function(){

        it("should be able to park a car", function(){
            var parkingLot = new ParkingLot(1);
            var smartParkingBoy = new SmartParkingBoy([parkingLot]);

            var parkingStub = smartParkingBoy.park(car1);

            expect(parkingLot.pickUp(parkingStub)).to.equal(car1);
        });

        it("should not be able to park a car when the parking is full", function(){
            var parkingLot = new ParkingLot(1);
            var smartParkingBoy = new SmartParkingBoy([parkingLot]);
            smartParkingBoy.park(car1);

            var parkingStub = smartParkingBoy.park(car2);

            expect(parkingLot.pickUp(parkingStub)).to.be.undefined;
        });

        it("should be able to pick up the car that is parked in the parking lot", function(){
            var parkingLot = new ParkingLot(1);
            var smartParkingBoy = new SmartParkingBoy([parkingLot]);
            var parkingStub = smartParkingBoy.park(car1);

            expect(smartParkingBoy.pickUp(parkingStub)).to.equal(car1);
        });

        it("should not be able to pick up the car that has picked", function(){
            var parkingLot = new ParkingLot(1);
            var smartParkingBoy = new SmartParkingBoy([parkingLot]);
            var parkingStub = smartParkingBoy.park(car1);

            parkingLot.pickUp(parkingStub);

            expect(smartParkingBoy.pickUp(parkingStub)).to.be.undefined;
        });
    });

    describe("when there are two parking lots", function(){
        it("should be able to park a car to the parking lot has more parking places when this one is the first parking lot", function(){
            var morePlaceParkingLot = new ParkingLot(2);
            var lessPlaceParkingLot = new ParkingLot(1);
            var smartParkingBoy = new SmartParkingBoy([morePlaceParkingLot, lessPlaceParkingLot]);

            var parkingStub = smartParkingBoy.park(car1);

            expect(morePlaceParkingLot.pickUp(parkingStub)).to.equal(car1);
            expect(lessPlaceParkingLot.pickUp(parkingStub)).to.be.undefined;
        });

        it("should be able to park a car to the parking lot has more parking places when this one is the second parking lot", function(){
            var lessPlaceParkingLot = new ParkingLot(1);
            var morePlaceParkingLot = new ParkingLot(2);
            var smartParkingBoy = new SmartParkingBoy([lessPlaceParkingLot, morePlaceParkingLot]);

            var parkingStub = smartParkingBoy.park(car1);

            expect(morePlaceParkingLot.pickUp(parkingStub)).to.equal(car1);
            expect(lessPlaceParkingLot.pickUp(parkingStub)).to.be.undefined;
        });

        it("should be able to park a car to one of the parking lots that have the most parking places", function(){
            var lessPlaceParkingLot = new ParkingLot(1);
            var morePlaceParkingLot1 = new ParkingLot(2);
            var morePlaceParkingLot2 = new ParkingLot(2);
            var smartParkingBoy = new SmartParkingBoy([lessPlaceParkingLot, morePlaceParkingLot1, morePlaceParkingLot2]);

            var parkingStub = smartParkingBoy.park(car1);

            var pickUpResultSet = _.concat(morePlaceParkingLot1.pickUp(parkingStub), morePlaceParkingLot2.pickUp(parkingStub));
            expect(pickUpResultSet).to.include(car1);
        });

        it("should not be able to park a car when all parking lots are full", function(){
            var firstParkingLot = new ParkingLot(1);
            var secondParkingLot = new ParkingLot(1);
            var smartParkingBoy = new SmartParkingBoy([firstParkingLot, secondParkingLot]);
            smartParkingBoy.park(car1);
            smartParkingBoy.park(car2);

            var parkingStub = smartParkingBoy.park(car3);

            expect(parkingStub).to.be.undefined;
        });

        it("should be able to pick up the car that is parked in the parking lot", function(){
            var lessPlaceParkingLot = new ParkingLot(1);
            var morePlaceParkingLot = new ParkingLot(2);
            var smartParkingBoy = new SmartParkingBoy([lessPlaceParkingLot, morePlaceParkingLot]);
            var parkingStub = smartParkingBoy.park(car1);

            expect(smartParkingBoy.pickUp(parkingStub)).to.equal(car1);
        });

    });
});