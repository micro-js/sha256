
# sha256

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Compute the SHA256 hash of something

## Installation

    $ npm install @f/sha256

## Usage

```js
var sha256 = require('@f/sha256')

function hashFile (path) {
  return sha256(fs.readFileSync(path))
}
```

## API

### sha256(str, encoding)

- `str` - The string you want to hash
- `encoding` - Optional, defaults to 'base64'. Specifies the output format (`hex/binary/base64`).

**Returns:** Returns a string representation of the sha256 hash of `str`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/sha256.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/sha256
[git-image]: https://img.shields.io/github/tag/micro-js/sha256.svg?style=flat-square
[git-url]: https://github.com/micro-js/sha256
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/sha256.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/sha256
