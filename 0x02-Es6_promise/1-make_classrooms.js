#!/usr/bin/node

const ClassRoom = require("./0-classroom");

function initializeRooms() {
    const a = new ClassRoom(19);
    const b = new ClassRoom(20);
    const c = new ClassRoom(34);

    result = [a, b, c]

    return [a, b, c];
}

module.exports = initializeRooms;
