import test from 'ava';
import humanizeKeys from '.';

test('main', t => {
	t.true(humanizeKeys({'foo-bar': true})['Foo bar']);
});

test('exclude option', t => {
	t.true(humanizeKeys({'--': true}, {exclude: ['--']})['--']);
	t.deepEqual(humanizeKeys({'foo-bar': true}, {exclude: [/^f/]}), {'foo-bar': true});
});

test('deep option', t => {
	t.deepEqual(
		// eslint-disable-next-line camelcase
		humanizeKeys({foo_bar: true, obj: {one_two: false, arr: [{three_four: true}]}}, {deep: true}),
		{'Foo bar': true, Obj: {'One two': false, Arr: [{'Three four': true}]}}
	);
});

test('handles nested arrays', t => {
	t.deepEqual(
		// eslint-disable-next-line camelcase
		humanizeKeys({q_w_e: [['a', 'b']]}, {deep: true}),
		{'Q w e': [['a', 'b']]}
	);
});

test('accepts an array of objects', t => {
	t.deepEqual(
		// eslint-disable-next-line camelcase
		humanizeKeys([{foo_bar: true}, {bar_foo: false}, {'bar-foo': 'false'}]),
		[{'Foo bar': true}, {'Bar foo': false}, {'Bar foo': 'false'}]
	);
});
