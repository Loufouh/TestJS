'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertNull(null); // No error
	tester.assertNull(1); // throw error
	tester.assertNull(3, 'Not null.'); // Customized message
}
