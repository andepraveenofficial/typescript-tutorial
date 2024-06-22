// Interface

interface Person {
    name: string;
    age: number;
}

// Interface Inheritance
interface Employee extends Person{
    employeeId: number;
    getData():string
}

const user:Employee = {
    name: 'Praveen',
    age:27,
    employeeId: 123,
    getData:()=> {
        return "Hello"
    }
}

console.log(user)
user.name = "Changed Name"
console.log(user)
