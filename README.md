# raf-q

Queue up a bunch of operations to be executed inside the next cycle of `requestAnimationFrame()`.

### API

#### `var q = rafq(exec)`

Create a queue with given executor function `exec`.

#### `q.push(op)`

Enqueue operation `op` for processing. Each time the queue is drained the executor function passed to the constructor will be invoked sequentially, receiving each queued operation as parameter.