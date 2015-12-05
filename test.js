import test from 'ava';
import fn from './';

test(async t => {
	const level = await fn();

	t.is(typeof level, 'number');
	t.true(level >= 0 && level <= 1);
});
