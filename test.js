import test from 'ava';
import m from '.';

test(async t => {
	const level = await m();

	t.is(typeof level, 'number');
	t.true(level >= 0 && level <= 1);
});
