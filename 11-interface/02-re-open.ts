// Re-Open the Interface

interface User {
    name: string;
    age: number;
}

// Re-Open
interface User{
    city:string
}

const user:User = {
    name: 'Praveen',
    age:28,
    city:'Hyderabad'
}