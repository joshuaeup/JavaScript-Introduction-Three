"use strict";

// Person fuction
let person = function () {
	// Function to retreive person data
	return function () {
		// Data
		let pii = {
			firstName: "Joe",
			lastName: "Johnson",
			age: 24,
			_ssn: 123456789,
		};

		// Function to retrieve data from an object using destructuring
		function getName({ firstName, lastName }) {
			return firstName + " " + lastName;
		}

		// retrieve returns the getName function while the rest of the object remains private
		return getName(pii);
	};
};
// Store person object within variable
const person1 = person();
console.dir(person1);
// Call and log variable to invoke the closure(inner object)
console.log(person1());

// Return the final closure retrieve without () so that you don't invoke it
// return retrieve;
