var _ = require("lodash");
var ParkingBoyBase = require("./parkingBoyBase");

function ParkingManager(parkingLots, parkingBoys) {
    this.parkingAbles = parkingLots.concat(parkingBoys);
}

ParkingManager.prototype = new ParkingBoyBase();

ParkingManager.prototype.park = function (car) {
    for(var index = 0; index < this.parkingAbles.length; index++){
        var parkingStub = this.parkingAbles[index].park(car);
        if(!!parkingStub){
            return parkingStub;
        }
    }
};

module.exports = ParkingManager;
