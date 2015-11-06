'use strict'

var test = require('tape')
var query = require('./')

test(function (t) {
  var obj = {
    location: {
      latitude: 1,
      longitude: 2
    }
  }
  t.equals(query(obj), 'location%5Blatitude%5D=1&location%5Blongitude%5D=2')
  t.end()
})
