//Mix and match

type cardNumber = {
    cardnumber:string
}

type cardDate = {
    cardDate:string
}

type cardDetails = cardNumber & cardDate & {cvv:number}
