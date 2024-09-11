#!/usr/bin/node

const Building = require("./5-building");

class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
	super(sqft);
	if (typeof floors === "number") {
	    this._floors = floors;
	}
    }

    get floors() {
	return this._floors;
    }

    evacuationWarningMessage() {
	return `Evacuate slowly the ${this._floors} floors`;
    }
}

module.exports = SkyHighBuilding;
