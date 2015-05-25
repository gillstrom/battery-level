'use strict';
var linuxBattery = require('linux-battery');
var osxBattery = require('osx-battery');
var toDecimal = require('to-decimal');

function osx(cb) {
	osxBattery(function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, parseFloat((res.mAhRemaining / res.mAhCapacity).toFixed(2)));
	});
}

function linux(cb) {
	linuxBattery(function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		res = res.percentage.slice(0, res.percentage.length);
		cb(null, toDecimal(parseFloat(res)));
	});
}

if (process.platform === 'darwin') {
	module.exports = osx;
} else if (process.platform === 'linux') {
	module.exports = linux;
} else {
	module.exports = require('win-battery-level');
}
