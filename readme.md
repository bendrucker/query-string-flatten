# query-string-flatten [![Build Status](https://travis-ci.org/bendrucker/query-string-flatten.svg?branch=master)](https://travis-ci.org/bendrucker/query-string-flatten)

> Create a query string with flattened object syntax


## Install

```
$ npm install --save query-string-flatten
```


## Usage

```js
var query = require('query-string-flatten')

query({foo: {bar: 1}})
//=> foo%5Bbar%5D%3D1
```

## API

#### `query(obj)` -> `string`

Returns a URL-encoded query string

##### obj

*Required*  
Type: `object`

An object containing key/value pairs for the query string. This object can have nested objects up to 1 level deep.


## License

MIT © [Ben Drucker](http://bendrucker.me)
