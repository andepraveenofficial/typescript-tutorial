// Generics

// Type parameter in Generic Constraints

function fn<T, U>(valOne:T, valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}


fn(3, "5")

function fn1<T, U extends number>(valOne:T, valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

// fn1(3, "5")  // Error

/* -------------------------- */
interface Database{
    connection : string,
    username:string,
    password:string
}

function fn2<T, U extends Database>(valOne:T, valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}

fn2(3, {connection:"", username:"", password:""})

/* --------------------------- */


interface Quiz{
    name:string,
    type:string,
}

interface course{
    name:string,
    author:string,
    subject:string
}


class Sellable<T>{
    public cart :T[] = []

    addToCart(product:T){
        this.cart.push(product)
    }
}



