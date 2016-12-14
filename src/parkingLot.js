var _ = require("lodash");

function ParkingLot(capacity) {
    this.capacity = !!capacity ? capacity : 10;
    this.parkingCars = {};
}

ParkingLot.prototype.park = function(car){
	if(_.size(this.parkingCars) >= this.capacity){
		return;
	}
	var parkingStub = _.uniqueId();
	this.parkingCars[parkingStub] = car;
	return parkingStub;
};

ParkingLot.prototype.pickUp = function(parkingStub){
	var car = this.parkingCars[parkingStub];
	delete this.parkingCars[parkingStub];
	return car;
};

ParkingLot.prototype.getAvailableParkingNumber = function(){
	return this.capacity - _.size(this.parkingCars);
};

ParkingLot.prototype.getVacancyRate = function () {
	return this.getAvailableParkingNumber()/this.capacity;
};

module.exports = ParkingLot;