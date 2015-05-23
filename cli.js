#!/usr/bin/env node
'use strict';
var meow = require('meow');
var batteryLevel = require('./');

meow({
	help: [
		'Usage',
		'  $ battery-level'
	].join('\n')
});

batteryLevel(function (err, res) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(res);
});
