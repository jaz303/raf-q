!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.rafq=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])(1)
});