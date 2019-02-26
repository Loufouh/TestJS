"use strict";

function instanceError(variableName, wantedClass, returnValue) {
	return error(`${variableName} is not an instance of ${wantedClass}`, returnValue);
}

function typeError(variableName, wantedType, returnValue) {
	return error(`${variableName} is not of type ${wantedType}`, returnValue);
}

function error(message, returnValue) {
	console.error(`${message}`);
	return returnValue;
}
