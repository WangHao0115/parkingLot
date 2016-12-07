
function ParkingBoy(parkingLots){
    this.parkingLots = parkingLots;
}

ParkingBoy.prototype.park = function(car){
    return this.parkingLots[0].park(car);
};

module.exports = ParkingBoy;