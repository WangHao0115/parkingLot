var _ = require('lodash');
var expect = require('chai').expect;
var Car = require("../../src/car");
var ParkingLot = require("../../src/parkingLot");
var SuperParkingBoy = require("../../src/superParkingBoy");
var ParkingLotBuilder = require("../builders/parkingLotBuilder");

describe("SuperParkingBoy", function () {
    var car1, car2, car3;

    beforeEach(function(){
        car1 = new Car("001");
        car2 = new Car("002");
        car3 = new Car("003");
    });

    describe("when there is only one parking lot", function(){

        it("should be able to park a car", function(){
            var parkingLot = new ParkingLot(1);
            var superParkingBoy = new SuperParkingBoy([parkingLot]);

            var parkingStub = superParkingBoy.park(car1);

            expect(parkingLot.pickUp(parkingStub)).to.equal(car1);
        });

        it("should not be able to park a car when the parking is full", function(){
            var parkingLot = new ParkingLot(1);
            var superParkingBoy = new SuperParkingBoy([parkingLot]);
            superParkingBoy.park(car1);

            var parkingStub = superParkingBoy.park(car2);

            expect(parkingLot.pickUp(parkingStub)).to.be.undefined;
        });

        it("should be able to pick up the car that is parked in the parking lot", function(){
            var parkingLot = new ParkingLot(1);
            var superParkingBoy = new SuperParkingBoy([parkingLot]);
            var parkingStub = superParkingBoy.park(car1);

            expect(superParkingBoy.pickUp(parkingStub)).to.equal(car1);
        });

        it("should not be able to pick up the car that has picked", function(){
            var parkingLot = new ParkingLot(1);
            var superParkingBoy = new SuperParkingBoy([parkingLot]);
            var parkingStub = superParkingBoy.park(car1);

            parkingLot.pickUp(parkingStub);

            expect(superParkingBoy.pickUp(parkingStub)).to.be.undefined;
        });
    });

    describe("when there are two parking lots", function(){
        it("should be able to park a car to the parking lot with high vacancy rate when this one is the first parking lot", function(){
            var highVacancyRateParkingLot = new ParkingLotBuilder().withCapacity(1).withNumberOfParkingCars(0).create();
            var lowVacancyRateParkingLot = new ParkingLotBuilder().withCapacity(2).withNumberOfParkingCars(1).create();
            var superParkingBoy = new SuperParkingBoy([highVacancyRateParkingLot, lowVacancyRateParkingLot]);

            var parkingStub = superParkingBoy.park(car1);

            expect(highVacancyRateParkingLot.pickUp(parkingStub)).to.equal(car1);
            expect(lowVacancyRateParkingLot.pickUp(parkingStub)).to.be.undefined;
        });

        it("should be able to park a car to the parking lot with high vacancy rate when this one is the second parking lot", function(){
            var highVacancyRateParkingLot = new ParkingLotBuilder().withCapacity(1).withNumberOfParkingCars(0).create();
            var lowVacancyRateParkingLot = new ParkingLotBuilder().withCapacity(2).withNumberOfParkingCars(1).create();
            var superParkingBoy = new SuperParkingBoy([lowVacancyRateParkingLot, highVacancyRateParkingLot]);

            var parkingStub = superParkingBoy.park(car1);

            expect(highVacancyRateParkingLot.pickUp(parkingStub)).to.equal(car1);
            expect(lowVacancyRateParkingLot.pickUp(parkingStub)).to.be.undefined;
        });

        it("should be able to park a car to one of the parking lots that have the highest vacancy rate", function(){
            var lowVacancyRateParkingLot = new ParkingLotBuilder().withCapacity(2).withNumberOfParkingCars(1).create();
            var highVacancyRateParkingLot1 = new ParkingLotBuilder().withCapacity(1).withNumberOfParkingCars(0).create();
            var highVacancyRateParkingLot2 = new ParkingLotBuilder().withCapacity(2).withNumberOfParkingCars(0).create();
            var superParkingBoy = new SuperParkingBoy([lowVacancyRateParkingLot, highVacancyRateParkingLot1, highVacancyRateParkingLot2]);

            var parkingStub = superParkingBoy.park(car1);

            var pickUpResultSet = _.concat(highVacancyRateParkingLot1.pickUp(parkingStub), highVacancyRateParkingLot2.pickUp(parkingStub));
            expect(pickUpResultSet).to.include(car1);
        });

        it("should not be able to park a car when all parking lots are full", function(){
            var firstParkingLot = new ParkingLot(1);
            var secondParkingLot = new ParkingLot(1);
            var superParkingBoy = new SuperParkingBoy([firstParkingLot, secondParkingLot]);
            superParkingBoy.park(car1);
            superParkingBoy.park(car2);

            var parkingStub = superParkingBoy.park(car3);

            expect(parkingStub).to.be.undefined;
        });

        it("should be able to pick up the car that is parked in the parking lot", function(){
            var lessPlaceParkingLot = new ParkingLot(1);
            var morePlaceParkingLot = new ParkingLot(2);
            var superParkingBoy = new SuperParkingBoy([lessPlaceParkingLot, morePlaceParkingLot]);
            var parkingStub = superParkingBoy.park(car1);

            expect(superParkingBoy.pickUp(parkingStub)).to.equal(car1);
        });

    });
});