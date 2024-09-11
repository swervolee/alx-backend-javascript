#!/usr/bin/node

const Pricing = require("./4-pricing");
const Currency = require("./3-currency");

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());
