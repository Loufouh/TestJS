'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertTrue(true); // No error
	tester.assertTrue(false); // throws error
	tester.assertTrue(false, 'The value is false.'); // Customized message
}
