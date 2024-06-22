// Accessability

class User{
    name:string  // This is also public
    public city:string = "Hyderabad"
    private email:string  // we can access within the class
    readonly age:number = 28

    constructor(name:string, email:string){
        this.name = name
        this.email = email
    }
}


const praveen = new User("praveen", "praveen@gmail.com");
console.log(praveen)

console.log(praveen.name)
console.log(praveen.city)
// console.log(praveen.email)  // Access Error -> private variable
// praveen.course = "Javascript" // Modification Error -> readonly

