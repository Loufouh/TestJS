'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertNotUndefined(1); // No error
	tester.assertNotUndefined(undefined); // throw error
	tester.assertNotUndefined(undefined, 'Undefined.'); // Customized message
}
