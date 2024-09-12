import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
	  if (typeof amount !== 'number' || !(currency instanceof Currency)) throw new Error()
	  this._amount = amount;
	  this._currency = currency;

  }
  get amount() {
	  return this._amount;
  }

  set amount(val) {
	  if (typeof val === 'number') {
	    this._amount = val;
	  }
  }

  get currency() {
	  return this._currency;
  }

  set currency(val) {
	  if (typeof val === 'object') {
	    this._currency = val;
	  }
  }

  displayFullPrice() {
	  return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') throw new Error();
    return amount * conversionRate;
  }
}
