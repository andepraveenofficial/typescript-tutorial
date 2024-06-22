// abstract 

// Abstract classes cannot create object by its own

// it is used as a blue-print
abstract class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getDetails():void // we compulsary implement in child class
        getReelTime():number{
            return 10
        }// It is chice implement or not
}


// const takephoto = new TakePhoto("test", "test")  // Cannot create an instance of an abstract class

class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode, filter)
    }

    getDetails():void{
        console.log("getDetails")
    }
}

const instagram = new Instagram("test", "test", 10),
