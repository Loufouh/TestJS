'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertNotSame(2, 1); // No error
	tester.assertNotSame(1, '1'); // No error
	tester.assertNotSame(1, 1); // throw error
	tester.assertNotSame('1', '1', 'The same.'); // Customized message
}
