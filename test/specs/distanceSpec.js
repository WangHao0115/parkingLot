"use strict";

var expect = require('chai').expect;
var given  = require("mocha-testdata");
var Distance = require("../../src/distance");

describe("Distance", function () {


    given([new Distance(1), new Distance(2)],
          [new Distance(0.1), new Distance(0.2)],
          [new Distance(0.1), new Distance(1)])
    .it("should return true when distance1 less than distance2 when not use unit", function (distance1, distance2) {
        expect(distance1.isLessThan(distance2)).to.be.ok;
    });

    given([new Distance(1, Distance.UNIT.M), new Distance(2, Distance.UNIT.M)],
          [new Distance(0.1, Distance.UNIT.M), new Distance(0.2, Distance.UNIT.M)],
          [new Distance(0.1, Distance.UNIT.M), new Distance(1, Distance.UNIT.M)],
          [new Distance(1, Distance.UNIT.KM), new Distance(2, Distance.UNIT.KM)],
          [new Distance(0.1, Distance.UNIT.KM), new Distance(0.2, Distance.UNIT.KM)],
          [new Distance(0.1, Distance.UNIT.KM), new Distance(1, Distance.UNIT.KM)])
    .it("should return true when distance1 less than distance2 when use same unit", function (distance1, distance2) {
        expect(distance1.isLessThan(distance2)).to.be.ok;
    });

    given([new Distance(1, Distance.UNIT.M), new Distance(1, Distance.UNIT.KM)],
          [new Distance(0.2, Distance.UNIT.KM), new Distance(300, Distance.UNIT.M)],
          [new Distance(100, Distance.UNIT.M), new Distance(0.3, Distance.UNIT.KM)])
    .it("should return true when distance1 less than distance2 when use different unit", function (distance1, distance2) {
        expect(distance1.isLessThan(distance2)).to.be.ok;
    });

});