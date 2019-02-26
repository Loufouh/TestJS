'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertNotNull(1); // No error
	tester.assertNotNull(null); // throw error
	tester.assertNotNull(null, 'Null.'); // Customized message
}
