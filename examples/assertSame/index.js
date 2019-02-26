'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertSame(1, 1); // No error
	tester.assertSame('1', '1'); // No error
	tester.assertSame('1', 1); // throw error
	tester.assertSame(1, 2, 'Not the same.'); // Customized message
}
