var expect = require('chai').expect;
var given  = require("mocha-testdata");
var Distance = require("../../src/distance");
var ParkingLot = require("../../src/parkinglot.js");
var Manager = require("../../src/manager.js");

describe("Manager", function () {

    it("should get nearer one between two parking lots", function () {
        var parkingLot1 = new ParkingLot(1,Distance.UNIT.KM);
        var parkingLot2 = new ParkingLot(2,Distance.UNIT.KM);
        expect(Manager.getNearerParkingLot(parkingLot1, parkingLot2)).to.be.equal(parkingLot1);
    });
});