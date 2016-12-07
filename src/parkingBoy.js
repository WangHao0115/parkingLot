var _ = require("lodash");
var ParkingLot = require("./parkingLot");
var Car = require("./car");

function ParkingBoy(parkingLots){
    this.parkingLots = parkingLots;
}

ParkingBoy.prototype.park = function(car){
    return this.parkingLots.park(car);
};

module.exports = ParkingBoy;