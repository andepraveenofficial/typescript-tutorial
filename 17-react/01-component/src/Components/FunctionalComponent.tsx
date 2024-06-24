import {FC, useState} from 'react'

const FunctionalComponent:FC = () => {
  const [counter, setCounter] = useState<number>(0)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => prev+1)}>Increase</button>
    </div>
  )
}

export default FunctionalComponent
