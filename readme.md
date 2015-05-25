# battery-level [![Build Status](https://travis-ci.org/gillstrom/battery-level.svg?branch=master)](https://travis-ci.org/gillstrom/battery-level)

> Get current battery level


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


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
