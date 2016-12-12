var _ = require("lodash");

function SmartParkingBoy(parkingLots){
    this.parkingLots = parkingLots;
}

SmartParkingBoy.prototype.park = function(car){
    var expectParkingLot = _.maxBy(this.parkingLots, function (parkingLot) {
        return parkingLot.getAvailableParkingNumber();
    });

    return expectParkingLot.park(car);
};

SmartParkingBoy.prototype.pickUp = function(parkingStub){
    for(var index = 0; index < this.parkingLots.length; index++){
        var car = this.parkingLots[index].pickUp(parkingStub);
        if(!!car){
            return car;
        }
    }
};

module.exports = SmartParkingBoy;