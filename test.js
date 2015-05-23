'use strict';
var test = require('ava');
var batteryLevel = require('./');

if (!process.env.CI) {
	test('battery', function (t) {
		t.plan(3);

		batteryLevel(function (err, res) {
			t.assert(!err, err);
			t.assert(typeof res === 'number', res);
			t.assert(res > 0 && res <= 1, res);
		});
	});
}
