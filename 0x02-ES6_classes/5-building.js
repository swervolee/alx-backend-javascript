#!/usr/bin/node

class Building {
    constructor(sqft) {
	if (typeof sqft === "number") {
	    self._sqft = sqft;
	}

	this.evacuationWarningMessage();
    }

    get sqft() {
	return self._sqft;
    }

    evacuationWarningMessage() {
	throw Error("Building must overide evacuationWarningMessage");
    }
}



module.exports = Building;
