var _ = require("lodash");
var ParkingLot = require("../../src/parkingLot");
var Car = require("../../src/car");

function ParkingLotBuilder() {
    this.parkingLotCapacity = 1;
    this.numberOfParkingCars = 0;
}

ParkingLotBuilder.prototype.withCapacity = function (capacity) {
    this.parkingLotCapacity = capacity;
    return this;
};

ParkingLotBuilder.prototype.withNumberOfParkingCars = function (numberOfParkingCars) {
    this.numberOfParkingCars = numberOfParkingCars;
};

ParkingLotBuilder.prototype.create = function () {
    var parkingLot = new ParkingLot(this.parkingLotCapacity);
    for(var index = 1; index < this.numberOfParkingCars; index++){
        var car = new Car(_.uniqueId("NO_"));
        parkingLot.park(car);
    }

    return parkingLot;
};

module.exports = ParkingLotBuilder;