function ParkingBoyBase(parkingLots){
    this.parkingLots = parkingLots;
}

ParkingBoyBase.prototype.pickUp = function(parkingStub){
    for(var index = 0; index < this.parkingLots.length; index++){
        var car = this.parkingLots[index].pickUp(parkingStub);
        if(!!car){
            return car;
        }
    }
};

module.exports = ParkingBoyBase;