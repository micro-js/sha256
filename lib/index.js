/**
 * Modules
 */

var crypto = require('crypto')

/**
 * Expose sha256
 */

module.exports = sha256

/**
 * sha256
 */

function sha256 (str, encoding) {
  var hash = crypto.createHash('sha256')
  hash.update(str)
  return hash.digest(encoding || 'base64')
}
