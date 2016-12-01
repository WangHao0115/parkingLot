
function Distance(value, unit) {
    this.value = value;
    this.unit = unit || Distance.UNIT.M;
}

Distance.UNIT = {
    M: "meter",
    KM: "kilometer"
};

Distance.prototype.isLessThan = function (distance) {
    return getDistance(this) < getDistance(distance);
};

function getDistance(distance) {
    return distance.unit === Distance.UNIT.M ? distance.value : distance.value * 1000;
}

module.exports = Distance;
