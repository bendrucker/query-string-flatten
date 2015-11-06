'use strict'

var queryString = require('query-string')
var flatten = require('obj-query')
var pipe = require('value-pipe')

module.exports = pipe(flatten, queryString.stringify)
