'use strict';
var execFile = require('child_process').execFile;
var pify = require('pify');
var Promise = require('pinkie-promise');
var toDecimal = require('to-decimal');

module.exports = function () {
	var cmd = 'WMIC';
	var args = ['Path', 'Win32_Battery', 'Get', 'EstimatedChargeRemaining'];

	return pify(execFile, Promise)(cmd, args).then(function (stdout) {
		if (!stdout) {
			return Promise.reject(new Error('No battery could be found'));
		}

		stdout = parseFloat(stdout.trim().split('\n')[1]);
		return toDecimal(stdout > 100 ? 100 : stdout);
	});
};
