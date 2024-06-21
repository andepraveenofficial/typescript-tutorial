// Interface

interface User {
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string
    startTrail:() => string,
    startTrail1():string,
    getCoupon(couponname : string, value:number) : number
}

const praveen:User = {
    dbId:22, 
    email:"praveen@example.com", 
    userId:123,
    startTrail:() => {
        return "trail started"
    },
    startTrail1:() => {
        return "trail started"
    },
    getCoupon:(name:"praveen100", off:10) => {
        return 10
    }
}

praveen.email = "changed@gmail.com"














