class Person {
	constructor({ firstName, lastName, age, gender, interests }) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.interests = interests;
	}

	get name() {
		return `${this.firstName} ${this.lastName}`;
	}

	get bio() {
		return `${this.name} is ${this.age} years old. They like ${this.interests}.`;
	}

	get greeting() {
		return `Hi! I'm ${this.name}.`;
	}
}

// Teacher
class Teacher extends Person {
	constructor({ firstName, lastName, age, gender, interests, subject }) {
		super({ firstName, lastName, age, gender, interests });
		this.subject = subject;
	}

	get greeting() {
		const genderLowerCase = this.gender;
		if (genderLowerCase === 'female' || genderLowerCase === 'f') {
			return `Hello. My name is Mrs. ${this.lastName}, and i teach ${this.subject}.`;
		} else if (genderLowerCase === 'male' || genderLowerCase === 'm') {
			return `Hello. My name is Mr. ${this.lastName}, and i teach ${this.subject}.`;
		} else {
			return `Hello. My name is Mx. ${this.lastName}, and i teach ${this.subject}.`;
		}
	}
}

// Student
class Student extends Person {
	constructor({ firstName, lastName, age, gender, interests }) {
		super({ firstName, lastName, age, gender, interests });
	}

	get greeting() {
		return `Yo! I'm ${this.firstName}.`;
	}
}
