var test = require('tape');
var rafq = require('..');

window.init = function() {

	test('rafq', function(assert) {

		var i = '';

		var q = rafq(function(x) {
			i += x;
		});

		q.after(function() {
			assert.ok(i === 'abc');
			assert.end();
		});

		q.push('a');
		q.push('b');
		q.push('c');

		assert.ok(i === '');

	});

}
