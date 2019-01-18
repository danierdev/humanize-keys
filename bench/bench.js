/* globals bench suite set */
'use strict';
const humanizeKeysNpm = require('humanize-keys');
const humanizeKeys = require('..');
const fixture = require('./fixture');

suite('camelcaseKeys', () => {
	set('mintime', 1000);

	bench('npm', () => {
		humanizeKeysNpm(fixture, {deep: true});
	});

	bench('master', () => {
		humanizeKeys(fixture, {deep: true});
	});
});
