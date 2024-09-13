export default class Building{
  constructor(sqft) {
    if (!typeof sqft === 'number') { throw new Error() }
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error("Building must override evacuationWarningMessage");
  }
}
