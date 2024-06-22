class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name(): string {
        return this._name;
    }

    // Setter for name
    set name(value: string) {
        if (value.length > 0) {
            this._name = value;
        } else {
            throw new Error('Name cannot be empty');
        }
    }

    // Getter for age
    get age(): number {
        return this._age;
    }

    // Setter for age
    set age(value: number) {
        if (value > 0 && value < 120) {
            this._age = value;
        } else {
            throw new Error('Age must be between 1 and 119');
        }
    }
}

// Usage
let person = new Person('John', 30);

console.log(person.name);  // Output: John
console.log(person.age);   // Output: 30

person.name = 'Jane';
person.age = 25;

console.log(person.name);  // Output: Jane
console.log(person.age);   // Output: 25

// Trying to set invalid values
try {
    person.name = '';  // Throws error
} catch (e) {
    console.log(e.message);  // Output: Name cannot be empty
}

try {
    person.age = 130;  // Throws error
} catch (e) {
    console.log(e.message);  // Output: Age must be between 1 and 119
}
