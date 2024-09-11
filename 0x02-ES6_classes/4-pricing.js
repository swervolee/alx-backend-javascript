#!/usr/bin/node

const Currency = require("./3-currency");

class Pricing {
    constructor(amount, currency) {
	if (typeof amount === 'number') {
	    this._amount = amount;
	}

	if (typeof currency === 'object') {
	    this._currency = currency;
	}
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
	return amount * conversionRate;
    }
}

module.exports = Pricing;
