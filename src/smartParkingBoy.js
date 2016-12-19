var _ = require("lodash");
var ParkingBoyBase = require("./parkingBoyBase");

function SmartParkingBoy(parkingLots){
    ParkingBoyBase.call(this, parkingLots);
}

SmartParkingBoy.prototype = new ParkingBoyBase();

SmartParkingBoy.prototype.park = function(car){
    var expectParkingLot = _.maxBy(this.parkingAbles, function (parkingLot) {
        return parkingLot.getAvailableParkingNumber();
    });

    return expectParkingLot.park(car);
};

module.exports = SmartParkingBoy;