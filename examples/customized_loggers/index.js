'use strict';

window.onload = function () {
	let tester = new AssertTester(insertInGreenDiv, insertInRedDiv); // variadic constructor

	tester.assertTrue(false);
}

function insertInGreenDiv(message) {
	insertIn(message, document.getElementById('greenDiv'));
} 

function insertInRedDiv(message) {
	insertIn(message, document.getElementById('redDiv'));
}

function insertIn(message, element) {
	element.insertAdjacentText('beforeend', message);
}

