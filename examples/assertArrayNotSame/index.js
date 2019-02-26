'use strict';

window.onload = function () {
	let tester = new AssertTester();

	tester.assertArrayNotSame([1, 2, 3, 4], [1, 2, 3]); // No error
	tester.assertArrayNotSame([1, 2, 3, 4], [1, 2, 4, 3]); // No error
	tester.assertArrayNotSame([1, 2, 3, 4], [1, 2, '4', 3]); // No error
	tester.assertArrayNotSame([1, 2, 3, 4], [1, 2, 3, 4]); // throw error
	tester.assertArrayNotSame([5, 4, 3, 2, 1], [5, 4, 3, 2, 1], 'The same.'); // Customized message
}
