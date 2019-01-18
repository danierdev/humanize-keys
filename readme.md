# humanize-keys [![Build Status](https://travis-ci.org/drivas/humanize-keys.svg?branch=master)](https://travis-ci.org/drivas/humanize-keys)

> Convert object keys to humanized words using [`humanize-string`](https://github.com/sindresorhus/humanize-string)


## Install

```
$ npm install humanize-keys
```


## Usage

```js
const humanizeKeys = require('humanize-keys');

// Convert an object
humanizeKeys({fooBar: true});
//=> {'Foo bar': true}

// Convert an array of objects
humanizeKeys([{fooBar: true}, {'bar-foo': false}]);
//=> [{'Foo bar': true}, {'Bar foo': false}]

humanizeKeys({'foo-bar': true, nested: {unicorn_rainbow: true}}, {deep: true});
//=> {'Foo bar': true, nested: {'Unicorn rainbow': true}}
```

```js
const humanizeKeys = require('humanize-keys');

const argv = require('minimist')(process.argv.slice(2));
//=> {_: [], 'foo-bar': true}

humanizeKeys(argv);
//=> {_: [], 'Foo bar': true}
```


## API

### humanizeKeys(input, [options])

#### input

Type: `Object` `Object[]`

Object or array of objects to humanize.

#### options

Type: `Object`

##### exclude

Type: `Array<string|RegExp>`<br>
Default: `[]`

Exclude keys from being humanized.

##### deep

Type: `boolean`<br>
Default: `false`

Recurse nested objects and objects in arrays.


## Related

- [snakecase-keys](https://github.com/bendrucker/snakecase-keys)


## License

MIT © Danier R.
