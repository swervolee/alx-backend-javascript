export default class Car {
  constructor(brand, motor, color) {
    self._brand = brand;
    self._motor = motor;
    self._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
