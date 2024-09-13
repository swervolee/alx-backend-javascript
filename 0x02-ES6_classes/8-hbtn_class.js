export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') throw new Error();
    this._size = size;
    this._location = location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
