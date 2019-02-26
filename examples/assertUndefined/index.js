'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertUndefined(undefined); // No error
	tester.assertUndefined(1); // throw error
	tester.assertUndefined(3, 'Not undefined.'); // Customized message
}
