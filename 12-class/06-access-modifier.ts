class User {
    // Private property: only accessible within the class
    private _courseCount1: number = 1;

    // Protected property: accessible within the class and subclasses
    protected _courseCount: number = 1;

    // Readonly property: can only be initialized, not modified
    readonly city: string = "Hyderabad";

    constructor(
        public email: string,
        public name: string
    ) {}

    // Getter for _courseCount
    get courseCount(): number {
        return this._courseCount;
    }

    // Setter for _courseCount
    set courseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }

    // Private method: only accessible within the class
    private deleteToken() {
        console.log("Token deleted");
    }
}

// Usage
const user = new User("test@example.com", "John Doe");

console.log(user.email); // test@example.com
console.log(user.name);  // John Doe
console.log(user.city);  // Hyderabad

// Using getter to access _courseCount
console.log(user.courseCount);  // 1

// Using setter to update _courseCount
user.courseCount = 5;
console.log(user.courseCount);  // 5
