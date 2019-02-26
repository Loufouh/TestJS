'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertFalse(false); // No error
	tester.assertFalse(true); // throw error
	tester.assertFalse(true, 'The value is true.'); // Customized message
}
