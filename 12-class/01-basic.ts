// class

class User{
    name:string
    email:string
    readonly age:number = 28
    
    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

const praveen = new User("praveen", "praveen@example.com", 28);
console.log(praveen)


praveen.email = "changed@example.com"
console.log(praveen)  // User { name: 'praveen', email: 'changed@example.com', age: 28 }

// praveen.age = 27  // Error -> readonly

