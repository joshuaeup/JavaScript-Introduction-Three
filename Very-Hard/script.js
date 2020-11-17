"use strict";
// Person Constructor
const Person = function (name, job, age) {
	// ----- FIELDS -----
	(this.name = name), (this.job = job), (this.age = age);
};
// ----- EXTERNAL METHODS -----
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

// Programmer Constructor
const Programmer = function (languages) {
	// ----- FIELDS -----
	this.languages = languages;
	this.busy = true;

	// ----- INTERNAL METHODS -----
	// Sets busy property to false
	this.completeTask = function () {
		this.busy = false;
	};

	// Sets busy property to true
	this.acceptNewTask = function () {
		this.busy = true;
	};

	// Checks state of busy then prints message accordingly
	this.offerNewTask = function () {
		console.log(
			this.busy === true
				? `${this.name} can't accept any new tasks right now`
				: `${this.name} would love to take on a new responsibility`
		);
	};

	// Pushes new value to languages array
	this.learnLanguage = function (language) {
		this.languages.push(language);
	};

	// Logs all collected languages
	this.listLanguages = function () {
		for (const i of this.languages) {
			console.log(i);
		}
	};
};

// Allows Programer to inherit from Person
Programmer.prototype = Object.create(Person.prototype);

// Insures that Person and Programmer do not reference the same object
Object.defineProperty(Programmer.prototype, "constructor", {
	value: Programmer,
	enumerable: false, // so that it does not appear in 'for in' loop
	writable: true,
});

// Create Programmer instance using new keyword
const programmerOne = new Programmer(["Java", "JavaScript"]);
(programmerOne.name = "Josh"), (programmerOne.job = "Software Developer");
programmerOne.age = 21;

// ----- METHOD CALLS -----
// Person methods
programmerOne.exercise();

programmerOne.fetchJob();

// Programmer Busy Methods
console.log(programmerOne.busy);
programmerOne.completeTask();
console.log(programmerOne.busy);
programmerOne.offerNewTask();

// Programmer Array Methods
programmerOne.learnLanguage("C#");
programmerOne.listLanguages();
