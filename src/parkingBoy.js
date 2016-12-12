
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

ParkingBoy.prototype.pickUp = function(car){
    for(var index = 0; index < this.parkingLots.length; index++){
        var car = this.parkingLots[index].pickUp(car);
        if(!!car){
            return car;
        }
    }
};
module.exports = ParkingBoy;