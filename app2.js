/*
    Creating classes
*/

/**
 * Person class
 * @param {string} fName First name
 * @param {string} lName Last name
 * @param {Date} dob Person date of birth
 */
const Person = function (fName, lName, dob) {
    this.firstName = fName;
    this.lastName = lName;
    this.dateOfBirth = dob;

    this.toString = function () {
        return `Name: ${this.firstName} ${this.lastName} DOB: ${this.dateOfBirth}`
    }

    this.age = function () {
        let today = new Date();
        let age = today.getFullYear() - this.dateOfBirth.getFullYear();
        let m = today.getMonth() - this.dateOfBirth.getMonth();
        if (m < 0 || (m == 0 && today.getDate() < this.dateOfBirth.getDate())) {
            age--;
        }
        return age;

        // Different solution
        /*let now = new Date();
        let yearsOfAge = now.getFullYear() - this.dateOfBirth.getFullYear();
        
        if (now.getMonth() < this.dateOfBirth.getMonth() ||
            (now.getMonth() == this.dateOfBirth.getMonth() &&
            now.getDate() < this.dateOfBirth.getDate())
        ) {
            yearsOfAge -= 1;
        }
        
        return yearsOfAge;*/



    }
}

const person1 = new Person('Chris', 'Cusack', new Date(1970, 4, 25));
const person2 = new Person('Justin', 'Cormier', new Date(1996, 0, 1));
const person3 = new Person('Jean', 'Cormier', new Date(1990, 2, 2));
const person4 = new Person('Jennifer', 'Cusack', new Date(1971, 8, 9));

console.log(person1.toString());
console.log(person2.toString());
console.log(person3.toString());
console.log(person4.toString());

person1.firstName = 'Christopher';
console.log(person1.age(this.dateOfBirth));
console.log(person2.age(this.dateOfBirth));
console.log(person3.age(this.dateOfBirth));
console.log(person4.age(this.dateOfBirth));

// Un arreglo de objetos, en este caso de personas
let people = [];

people.push(person1, person2, person3, person4);

console.log(people);

for (const p of people) {
    console.log(p.toString());
    console.log(p.firstName, p.age());
}

//Arrey functions
//Filter like Select where clause always returns an array
//let query = people.filter(p => p.firstName.toLocaleLowerCase === 'jennifer');
let query = people.filter(p => p.firstName === 'Jennifer' || p.lastName === 'Cormier');

console.log(query);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

if (!!query.length) {
    for (const p of query) {
        console.log(p.toString());
    }
} else {
    console.log(('No result in our query'));
}

// Find returns the first value based on your expresion (always returns the first value found - single value)
let findChris = people.find(p => p.firstName === 'Chris');

if (!!findChris) {
    console.log(findChris.firstName);
}

// Starts with partial search
let findStartsWith = people.filter(p => p.lastName.indexOf('Cus') == 0);
//let findStartsWith = people.filter(p => p.lastName.toLowerCase().indexOf('cor') == 0);

console.log(findStartsWith);

// Search anywhere in lastname
let findAnywhere = people.filter(person => person.lastName.toLocaleLowerCase().indexOf('orm') >= 0);

console.log(findAnywhere);