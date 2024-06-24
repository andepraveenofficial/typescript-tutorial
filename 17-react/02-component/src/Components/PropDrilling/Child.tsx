import React from 'react'


/* -----> Component <----- */

interface Props{
    data:string
    setData:React.Dispatch<React.SetStateAction<string>>
    age? : number // Default Props
}

const Child:React.FC<Props> = (props) => {
    const {data, setData} = props
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => setData("I am New Data")}>Change Data</button>
    </div>
  )
}

export default Child
