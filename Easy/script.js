"use strict";
// Function to retrieve exercise name
const exercise = (exerciseName) => {
	// Function to use exercise name value
	return () => `Today's exercise: ${exerciseName}`;
};

const run = exercise("running");
console.log(run());

const swim = exercise("swimming");
console.log(swim());
