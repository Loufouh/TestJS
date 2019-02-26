'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertArrayEquals([1, 2, 3, 4], [1, 2, 3, 4]); // No error
	tester.assertArrayEquals(['1', 2, '3', 4], [1, 2, 3, 4]); // No error
	tester.assertArrayEquals([1, 2, 3, 4], [1, 2, 3]); // throw error
	tester.assertArrayEquals([1, 2, 3, 4], [1, 2, 4, 3]); // throw error
	tester.assertArrayEquals([1, 2, 3, 4], [1, '3', 2, 5], 'Not equal.'); // Customized message
}
