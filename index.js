'use strict';
var linuxBattery = require('linux-battery');
var osxBattery = require('osx-battery');
var toDecimal = require('to-decimal');

function osx() {
	return osxBattery().then(function (res) {
		return parseFloat((res.currentCapacity / res.maxCapacity).toFixed(2));
	});
}

function linux() {
	return linuxBattery().then(function (res) {
		return toDecimal(parseFloat(res[0].percentage.slice(0, res[0].percentage.length)));
	});
}

if (process.platform === 'darwin') {
	module.exports = osx;
} else if (process.platform === 'linux') {
	module.exports = linux;
} else {
	module.exports = require('./win');
}
