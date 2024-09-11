#!/usr/bin/node

class HolbertonCourse {
    constructor(name, length, students) {

	if (typeof name === "string") {
	    this._name = name;
	}


	if (typeof length === "number") {
	    this._length = length;
	}


	if (Array.isArray(students)) {
	    this._students = students;
	}
    }


    set name(newName) {
	if (typeof newName === "string") {
	    this._name = newName;
	}
    }


    get name() {
	return this._name;
    }


    set length(newLength) {
	if (typeof newLength === "number") {
	    this._length = newLength;
	}
    }


    get length() {
	return this._length;
    }


    set students(newList) {
	if (Array.isArray(newList)) {
	    this._students = newList;
	}
    }


    get students() {
	return this._students;
    }
}

module.exports = HolbertonCourse;
