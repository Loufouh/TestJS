'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertNotEquals(2, 1); // No error
	tester.assertNotEquals('2', 1); // No error
	tester.assertNotEquals(1, 1); // throw error
	tester.assertNotEquals('1', 1, 'Equal.'); // Customized message
}
