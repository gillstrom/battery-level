'use strict';
const execa = require('execa');
const linuxBattery = require('linux-battery');
const osxBattery = require('osx-battery');
const toDecimal = require('to-decimal');

const linux = async () => {
	const [battery] = await linuxBattery();
	const {percentage} = battery;

	return toDecimal(parseFloat(percentage.slice(0, percentage.length)));
};

const osx = async () => {
	const {currentCapacity, maxCapacity} = await osxBattery();
	return parseFloat((currentCapacity / maxCapacity).toFixed(2));
};

const win = async () => {
	const {stdout} = await execa('WMIC', ['Path', 'Win32_Battery', 'Get', 'EstimatedChargeRemaining']);
	const level = parseFloat(stdout.split('\n')[1]);

	return toDecimal(level > 100 ? 100 : level);
};

if (process.platform === 'darwin') {
	module.exports = osx;
} else if (process.platform === 'linux') {
	module.exports = linux;
} else {
	module.exports = win;
}
