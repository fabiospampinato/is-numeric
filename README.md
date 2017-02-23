# isNumeric

![Issues](https://img.shields.io/github/issues/fabiospampinato/is-numeric.svg)
[![NPM version](https://img.shields.io/npm/v/@fabiospampinato/is-numeric.svg)](https://www.npmjs.com/package/@fabiospampinato/is-numeric)

Checks if a variable represents a numeric value.

## Install

```shell
$ npm install --save @fabiospampinato/is-numeric
```

## Usage

```js
import isNumeric from '@fabiospampinato/is-numeric';

isNumeric ( 3 ); // true
isNumeric ( '3' ); // true
isNumeric ( 2e+30 ); // true
isNumeric ( '2e30' ); // true

isNumeric ( Infinity ); // false
isNumeric ( NaN ); // false
isNumeric ( '__test__' ); // false
isNumeric ( '123test' ); // false
```

## License

MIT © Fabio Spampinato
