var _ = require("lodash");
var ParkingLot = require("./parkingLot");

function Manager() {}

Manager.getNearerParkingLot = function (parkingLot1, parkingLot2) {
    return parkingLot1.distance.isLessThan(parkingLot2.distance) ? parkingLot1 : parkingLot2;
};

module.exports = Manager;