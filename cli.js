#!/usr/bin/env node
'use strict';
const meow = require('meow');
const toPercent = require('to-percent');
const fn = require('./');

meow(`
	Usage
	  $ battery-level
`);

fn().then(res => console.log(toPercent(res) + '%'));
