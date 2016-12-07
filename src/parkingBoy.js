
function ParkingBoy(parkingLots){
    this.parkingLots = parkingLots;
}

ParkingBoy.prototype.park = function(car){
    for(var index = 0; index < this.parkingLots.length; index++){
        var parkingStub = this.parkingLots[index].park(car);
        if(!!parkingStub){
            return parkingStub;
        }
    }
};

module.exports = ParkingBoy;