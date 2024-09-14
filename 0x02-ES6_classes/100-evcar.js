import Car from "./10-car.js";

export default class EVcar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    self._range = range;
  }

  cloneCar() {
    return new Car();
  }
}
