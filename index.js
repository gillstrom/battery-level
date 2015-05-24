'use strict';
var osxBattery = require('osx-battery');

module.exports = function (cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	osxBattery(function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, parseFloat((res.mAhRemaining / res.mAhCapacity).toFixed(4)));
	});
};
