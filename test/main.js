var test = require('tape');
var rafq = require('..');

window.init = function() {

	test('rafq', function(assert) {

		var i = '';

		var q = rafq(function(x) {
			i += x;
		});

		q.push('a');
		q.push('b');
		q.push('c');

		assert.ok(i === '');

		setTimeout(function() {
			assert.ok(i === 'abc');
			assert.end();
		}, 500);

	});

}
