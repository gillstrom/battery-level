<h1 align="center">
	<br>
	<img width="360" src="https://cloud.githubusercontent.com/assets/499192/8873940/10999f96-320c-11e5-86a0-7a447d50b4cb.png" alt="battery-level">
	<br>
	<br>
</h1>

> Get current battery level

[![Build Status](https://travis-ci.org/gillstrom/battery-level.svg?branch=master)](https://travis-ci.org/gillstrom/battery-level)


## Install

```
$ npm install --save battery-level
```


## Usage

```js
var batteryLevel = require('battery-level');

batteryLevel(function (err, res) {
	console.log(res);
	//=> 0.55
});
```


## CLI

```
$ npm install --global battery-level
```

```
$ battery-level --help

  Usage
    $ battery-level
    55%
```


## Related

* [browser-battery](https://github.com/gillstrom/browser-battery) - Get battery information in a browser


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
