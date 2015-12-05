<h1 align="center">
	<br>
	<img width="360" src="https://rawgit.com/gillstrom/battery-level/master/media/logo.png" alt="battery-level">
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


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
