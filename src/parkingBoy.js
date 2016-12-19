var ParkingBoyBase = require("./parkingBoyBase");

function ParkingBoy(parkingLots){
    ParkingBoyBase.call(this, parkingLots);
}

ParkingBoy.prototype = new ParkingBoyBase();

ParkingBoy.prototype.park = function(car){
    for(var index = 0; index < this.parkingAbles.length; index++){
        var parkingStub = this.parkingAbles[index].park(car);
        if(!!parkingStub){
            return parkingStub;
        }
    }
};

module.exports = ParkingBoy;