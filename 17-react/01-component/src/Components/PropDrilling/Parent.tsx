import {FC, useState} from 'react'
import Child from './Child'

const Parent:FC = () => {
    const [data, setData] = useState<string>("I am Old Data")
  return (
    <div>
      <h1>Parent</h1>
      <Child data={data} setData={setData}/>
    </div>
  )
}

export default Parent
