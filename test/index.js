/**
 * Imports
 */

var sha256 = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(sha256('test'), 'n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=')
  t.end()
})
