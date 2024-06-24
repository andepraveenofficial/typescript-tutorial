import {Dispatch, FC, SetStateAction} from 'react'


/* -----> Component <----- */

interface ChildProps{
    data:string
    setData:Dispatch<SetStateAction<string>>
}

const Child:FC<ChildProps> = (props) => {
    const {data, setData} = props
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => setData("I am New Data")}>Change Data</button>
    </div>
  )
}

export default Child
