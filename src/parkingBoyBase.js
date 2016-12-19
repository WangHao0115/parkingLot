function ParkingBoyBase(parkingLots){
    this.parkingAbles = parkingLots;
}

ParkingBoyBase.prototype.pickUp = function(parkingStub){
    for(var index = 0; index < this.parkingAbles.length; index++){
        var car = this.parkingAbles[index].pickUp(parkingStub);
        if(!!car){
            return car;
        }
    }
};

module.exports = ParkingBoyBase;