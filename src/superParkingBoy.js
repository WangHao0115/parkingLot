var _ = require("lodash");
var ParkingBoyBase = require("./parkingBoyBase");

function SuperParkingBoy(parkingLots){
    ParkingBoyBase.call(this, parkingLots);
}

SuperParkingBoy.prototype = new ParkingBoyBase();

SuperParkingBoy.prototype.park = function(car){
    var highestVacancyRateParkingLot = _.maxBy(this.parkingLots, function (parkingLot) {
        return parkingLot.getVacancyRate();
    });

    return highestVacancyRateParkingLot.park(car);
};

module.exports = SuperParkingBoy;