class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "beep";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}

class Garage {
  constructor(capacity) {
    if (!Number.isInteger(capacity)) {
      throw new Error("Capacity needs to be an integer.");
    }

    this.vehicles = [];
    this.capacity = capacity;
  }
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "You must submit a vehicle!";
    }
    if (this.vehicles.length < this.capacity) {
      this.vehicles.push(vehicle);
      return "Vehicle added to garage!";
    } else {
      return "Garage is at capacity!";
    }
  }
}
