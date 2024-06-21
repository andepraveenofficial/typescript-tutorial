

function detectType(val: number | string){
    if (typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}


function ProvideId(id:string | null){
    if (!id){
        console.log("please provide ID")
        return 
    }
    return id.toLowerCase()
}


/* -------------------- */

function printAll(strs :string | string[] | null){
    if (strs){
        if (typeof strs === "object"){
            for (const s of strs){
                console.log(s)
            }
        }
        else if (typeof strs === "string"){
            console.log(strs)
        }
    }
}