'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertArraySame([1, 2, 3, 4], [1, 2, 3, 4]); // No error
	tester.assertArraySame([1, 2, 3, 4], [1, 2, 3]); // throw error
	tester.assertArraySame([1, 2, 3, 4], [1, 3, 2, 4]); // throw error
	tester.assertArraySame([1, 2, 3, 4], [1, 2, '3', 4], 'Not the same.'); // Customized message
}
