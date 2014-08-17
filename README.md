# raf-q

Enqueue operations for later processing in a requestAnimationFrame() callback.

## Installation

## npm/browserify

Get it:

    npm install --save raf-q

Require it:

    var rafq = require('raf-q');

## UMD

Copy and paste either `build/dom-q.js` or `build/dom-q.min.js` into your project.

### API

#### `var q = rafq(exec)`

Create a queue with given executor function `exec`.

#### `q.push(op)`

Enqueue operation `op` for processing. Each time the queue is drained the executor function passed to the constructor will be invoked sequentially, receiving each queued operation as parameter.

#### `q.after(cb)`

Enqueue callback function `cb` to be called during the next processing batch, once all other operations in the queue have been applied.

## Copyright &amp; License

&copy; 2014 Jason Frame [ [@jaz303](http://twitter.com/jaz303) / [jason@onehackoranother.com](mailto:jason@onehackoranother.com) ]

Released under the ISC license.