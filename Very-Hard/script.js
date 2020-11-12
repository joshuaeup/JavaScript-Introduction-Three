"use strict";
// Person Constructor
const Person = function (name, job, age) {
	(this.name = name), (this.job = job), (this.age = age);
};
// Prints message to console
Person.prototype.exercise = function () {
	console.log("Running is fun! - said no one ever");
};

// Prints message to console with variables
Person.prototype.fetchJob = function () {
	console.log(`${this.name} is a ${this.job}`);
};
// Create person instance using new keyword
const person1 = new Person("Joshua Proctor", "Software Developer", 21);
// person1.exercise();

// Programmer Constructor
const Programmer = function (languages) {
	this.languages = languages;
	this.busy = true;
};

// Allows Programer to inherit from Person
Programmer.prototype = Object.create(Person.prototype);

// Insures that Person and Programmer do not reference the same object
Object.defineProperty(Programmer.prototype, "constructor", {
	value: Programmer,
	enumerable: false, // so that it does not appear in 'for in' loop
	writable: true,
});

// Sets busy property to false
Programmer.prototype.completeTask = function () {
	this.busy = false;
};

// Sets busy property to true
Programmer.prototype.acceptNewTask = function () {
	this.busy = true;
};

// Checks state of busy then prints message accordingly
Programmer.prototype.offerNewTask = function () {
	console.log(
		this.busy === true
			? `${this.name} can't accept any new tasks right now`
			: `${this.name} would love to take on a new responsibility`
	);
};

Programmer.prototype.learnLanguage = function (language) {
	this.languages.push(language);
};

Programmer.prototype.listLanguages = function () {
	// this.languages = languages + language
	for (const i of this.languages) {
		console.log(i);
	}
};
// Create Programmer instance using new keyword
const Josh = new Programmer(["Java", "JavaScript"]);
