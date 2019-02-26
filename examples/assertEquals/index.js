'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertEquals(1, 1); // No error
	tester.assertEquals('1', 1); // No error
	tester.assertEquals(2, 1); // throw error
	tester.assertEquals('2', 1, 'Not equal.'); // Customized message
}
