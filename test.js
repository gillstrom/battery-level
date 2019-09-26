import test from 'ava';
import batteryLevel from '.';

test('main', async t => {
	const level = await batteryLevel();

	t.is(typeof level, 'number');
	t.true(level >= 0 && level <= 1);
});
