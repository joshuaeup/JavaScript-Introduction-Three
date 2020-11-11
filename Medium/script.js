"use strict";
// Function to retrieve slicesAmount
const cutPizzaSlices = (slicesAmount) => {
	// Function to retrieve numberOfPeople then perform calculation
	const numberOfPeople = (num) => {
		return slicesAmount / num;
	};
	return numberOfPeople;
};

const sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"

// Converts to double then accepts 2 decimal places
console.log(parseFloat(sharePizza(3).toFixed(2)));
// prints "Each person gets 2.67 slices of pizza"
