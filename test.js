'use strict';
var test = require('ava');
var batteryLevel = require('./');

if (!process.env.CI) {
	test(function (t) {
		t.plan(2);

		batteryLevel().then(function (res) {
			t.assert(typeof res === 'number', res);
			t.assert(res > 0 && res <= 1, res);
		});
	});
}
