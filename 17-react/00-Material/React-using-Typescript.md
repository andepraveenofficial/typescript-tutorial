# React using Typescript

### Setup
1. Install __Node.js__
2. npm create vite@latest my-app
3. select `Typescript`


### Cheat Sheet
https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

### React Typescript Types
* FC -> Functional Component

### Examples

```ts
const [counter, setCounter] = useState<number>(0)
const inputRef = useRef<HTMLInputElement>(null);
```