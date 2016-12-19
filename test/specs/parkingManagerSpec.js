var _ = require('lodash');
var expect = require('chai').expect;
var Car = require("../../src/car");
var ParkingLot = require("../../src/parkingLot");
var ParkingBoy = require("../../src/parkingBoy");
var ParkingManager = require("../../src/parkingManager");

describe("Parking Manager", function () {
    var car;

    beforeEach(function(){
        car = new Car("001");
    });

    it("should be able to park car by himself", function () {
        var parkingLot = new ParkingLot(1);
        var parkingManager = new ParkingManager([], [parkingLot]);

        var parkingStub = parkingManager.park(car);

        expect(parkingLot.pickUp(parkingStub)).to.equal(car);
    });

    it("should be able to parking a car through a parking boy", function () {
        var parkingLot = new ParkingLot(100);
        var parkingBoy = new ParkingBoy([parkingLot]);
        var parkingManager = new ParkingManager([parkingBoy], []);

        var parkingStub = parkingManager.park(car);

        expect(parkingBoy.pickUp(parkingStub)).to.equal(car);
    });


    it("should be able to pick up a car by himself", function () {
        var parkingLot = new ParkingLot(1);
        var parkingManager = new ParkingManager([], [parkingLot]);

        var parkingStub = parkingManager.park(car);

        expect(parkingManager.pickUp(parkingStub)).to.equal(car);
    });

    it("should be able to pick up a car through parking boy", function () {
        var parkingLot = new ParkingLot(1);
        var parkingBoy = new ParkingBoy([parkingLot]);
        var parkingManager = new ParkingManager([parkingBoy], []);

        var parkingStub = parkingLot.park(car);

        expect(parkingManager.pickUp(parkingStub)).to.equal(car);
    });
});