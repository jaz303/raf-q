module.exports = function(exec) {
    return new Queue(exec);
}

var raf = window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame;

raf = raf ? raf.bind(window) : function(fn) { return setTimeout(fm, 16); };

function Queue(exec) {
    this._ops = [];
    this._after = [];
    this._timer = null;
    this._drainMethod = this._drain.bind(this);
    this._exec = exec;
}

Queue.prototype._drain = function() {

    var ary, i, len;
    
    ary = this._ops;
    for (i = 0, len = ary.length; i < len; ++i) {
        this._exec(ary[i]);
    }
    ary.length = 0;

    ary = this._after;
    for (i = 0, len = ary.length; i < len; ++i) {
        ary[i]();
    }
    ary.length = 0;

    this._timer = null; 

}

Queue.prototype.push = function(op) {
    this._ops.push(op);
    if (!this._timer) {
        this._timer = raf(this._drainMethod);
    }
}

Queue.prototype.after = function(cb) {
    this._after.push(cb);
    if (!this._timer) {
        this._timer = raf(this._drainMethod);
    }
}