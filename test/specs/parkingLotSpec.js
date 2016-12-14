var expect = require('chai').expect;
var Car = require("../../src/car.js");
var given = require("mocha-testdata");
var ParkingLot = require("../../src/parkingLot.js");
var ParkingLotBuilder = require("../builders/parkingLotBuilder");

describe("ParkingLot", function () {
	var parkingLot;

	beforeEach(function(){
		parkingLot = new ParkingLot(3);
	});

   it("should park and pick up the car ", function(){
   		var car = new Car("001");
   		var parkingStub = parkingLot.park(car);

   		expect(parkingLot.pickUp(parkingStub)).to.equal(car);
   });

	it("should pick up the right car when there are multiple cars in parking lot ", function(){
		var car1 = new Car("001");
		var car2 = new Car("002");
		var car3 = new Car("003");
		var parkingStub1 = parkingLot.park(car1);
		var parkingStub2 = parkingLot.park(car2);
		var parkingStub3 = parkingLot.park(car3);

		expect(parkingLot.pickUp(parkingStub2)).to.equal(car2);
		expect(parkingLot.pickUp(parkingStub1)).to.equal(car1);
		expect(parkingLot.pickUp(parkingStub3)).to.equal(car3);
	});

	it("should not be able to pick up the car that is already picked", function(){
		var car = new Car("001");
		var parkingStub = parkingLot.park(car);
		parkingLot.pickUp(parkingStub);

		expect(parkingLot.pickUp(parkingStub)).to.be.undefined;
	});

	it("should not parking car when the parking lot is full ", function(){
		parkingLot.park(new Car("001"));
		parkingLot.park(new Car("002"));
		parkingLot.park(new Car("003"));
		var parkingStub = parkingLot.park(new Car("004"));

		expect(parkingStub).to.be.undefined;
	});

	it("should get right available parking place number when parking lot is empty", function(){
		var availableParkingNubmer = parkingLot.getAvailableParkingNumber();

		expect(availableParkingNubmer).to.equal(3);
	});

	it("should get right available parking place number when parking lot is not empty", function(){
		parkingLot.park(new Car("001"));
		parkingLot.park(new Car("002"));

		expect(parkingLot.getAvailableParkingNumber()).to.equal(1);
	});

	it("should get right available parking place number when parking lot is full", function(){
		parkingLot.park(new Car("001"));
		parkingLot.park(new Car("002"));
		parkingLot.park(new Car("003"));

		expect(parkingLot.getAvailableParkingNumber()).to.equal(0);
	});

	it("should get right available parking place number when pick up car", function(){
		parkingLot.park(new Car("001"));
		var parkingStub = parkingLot.park(new Car("002"));
		parkingLot.pickUp(parkingStub);

		expect(parkingLot.getAvailableParkingNumber()).to.equal(2);
	});

	it("should get right vacancy rate of parking lot", function(){
		var parkingLotWithHundredPercentVacancy = new ParkingLotBuilder().withCapacity(1).withNumberOfParkingCars(0).create();
		var parkingLotWithZeroPercentVacancy = new ParkingLotBuilder().withCapacity(1).withNumberOfParkingCars(1).create();
		var parkingLotWithFiftyPercentVacancy = new ParkingLotBuilder().withCapacity(2).withNumberOfParkingCars(1).create();

		expect(parkingLotWithHundredPercentVacancy.getVacancyRate()).to.equal(1);
		expect(parkingLotWithFiftyPercentVacancy.getVacancyRate()).to.equal(0.5);
		expect(parkingLotWithZeroPercentVacancy.getVacancyRate()).to.equal(0);
	});
});