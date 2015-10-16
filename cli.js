#!/usr/bin/env node
'use strict';
var meow = require('meow');
var toPercent = require('to-percent');
var batteryLevel = require('./');

meow([
	'Usage',
	'  $ battery-level'
]);

batteryLevel().then(function (res) {
	console.log(toPercent(res) + '%');
});
