'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertArrayNotEquals([1, 2, 3, 4], [1, 2, 3]); // No error
	tester.assertArrayNotEquals([1, 2, 3, 4], [1, 2, 4, 3]); // No error
	tester.assertArrayNotEquals(['1', 2, '3', 4], [1, 2, 4, 3]); // No error
	tester.assertArrayNotEquals([1, 2, 3, 4], [1, 2, 3, 4]); // throw error
	tester.assertArrayNotEquals([1, 2, 3, 4], [1, '2', 3, 4], 'Equal.'); // Customized message
}
