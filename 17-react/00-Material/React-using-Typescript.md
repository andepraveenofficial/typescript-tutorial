# React using Typescript

### Setup -> cra
1. Install __Node.js__
2. `npx create-react-app my-app --template typescript`

### Setup -> vite
1. Install __Node.js__
2. `npm create vite@latest my-app`
3. select `Typescript`


### Cheat Sheet
https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

### React Typescript Types
* FC -> Functional Component
```ts
import React from 'react'

// React.FC -> Functional Component
const App:React.FC = () => {
  return (
    <div>
        App
    </div>
  )
}

export default App

```

* Function as a Prop
```ts
interface Props{
    data:string
    setData:React.Dispatch<React.SetStateAction<string>>
}
```

### Examples

```ts
const [counter, setCounter] = useState<number>(0)
const inputRef = useRef<HTMLInputElement>(null);
```


### Event Types

```ts 
const handleInput = (event:React.FormEvent) => {
   /// 
}
```


### Realtime Project
* Store all interfaces in models folder