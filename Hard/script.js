"use strict";

// Person fuction
const person = () => {
	// Function to retreive person data
	return () => {
		// Data pulled from Database
		let pii = {
			firstName: "Joe",
			lastName: "Johnson",
			age: 24,
			_ssn: 123456789,
		};

		// // Function to retrieve data from an object using destructuring
		let getName = ({ firstName, lastName }) => firstName + " " + lastName;

		// Inner function returns the getName function while the rest of the object remains private
		return getName(pii);
	};
};
// Store person function within variable and gain access to inner code
const person1 = person();
// Call and log variable to invoke the closure(inner object)
console.log(person1());
