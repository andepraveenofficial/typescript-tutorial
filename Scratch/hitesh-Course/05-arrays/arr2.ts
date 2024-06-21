// Arrays

const nums:string[] = ["one", "two", "three"]
console.log(nums)

const nums1:Array<string> = ["one", "two", "three"]


const nums2:Array<string | number> = ["one", "two", "three"]
nums2.push(4);

console.log(nums2)

/* --------- Objects inside the Array -------- */
type User = {
    name : string
    isActive : boolean
}

const allUsers:User[] = []

// allUsers.push("aas") // error -> push only object
allUsers.push({name:"praveen", isActive:false})

console.log(allUsers);


/* ------> Array inside Array <------ */

const MLModels : number[][] = []

// MLModels.push("") // error
MLModels.push([1,2])



