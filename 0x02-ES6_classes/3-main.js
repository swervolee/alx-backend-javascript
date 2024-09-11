#!/usr/bin/node

const Currency = require("./3-currency");

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());
