<h1 align="center">
	<br>
	<img width="360" src="https://cloud.githubusercontent.com/assets/499192/8873940/10999f96-320c-11e5-86a0-7a447d50b4cb.png" alt="battery-level">
	<br>
	<br>
</h1>

> Get current battery level


## Install

```
$ npm install --save battery-level
```


## Usage

```js
const batteryLevel = require('battery-level');

batteryLevel().then(level => {
	console.log(level);
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
* [is-charging](https://github.com/gillstrom/is-charging) - Find out if a computer is charging


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
