// class

// Access Modifiers


// class
// getters & setters

class User{
    private _courseCount1 = 1 // We cannot access outside of class
    protected _courseCount = 1  // we can use other class
    readonly city:string = "Hyderabad"
    constructor(
        public email:string,
        public name:string
    ){}

    // Methods
    get getDetails():string{
        return `I am getDetails`
    }

    get courseCount():number{
        return this._courseCount
    }

    // setter no return type
    set courseCount(courseNum){
        if (courseNum <=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

    // private method -> Only Accessible within the class
    private deleteToken(){
        console.log("Token deleted")
    }
}



// SUb-Class

class SubUser extends User{
    isFamily:boolean = true

    changeCourseCount(){
        this._courseCount = 4
    }    
}
