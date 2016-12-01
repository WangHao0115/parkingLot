
var Distance = require("./distance.js");

function ParkingLot(distance, unit) {
    this.distance = new Distance(distance, unit);
}
module.exports = ParkingLot;