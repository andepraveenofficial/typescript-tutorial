import {FC} from 'react'
import FunctionalComponent from './Components/FunctionalComponent'
import Parent from './Components/PropDrilling/Parent'
import GetData from './Components/Fetch/GetData'

const App:FC = () => {
  return (
    <div>
      <FunctionalComponent/>
      <hr/>

      <Parent/>
      <hr/>

      <GetData/>
      <hr />
    </div>
  )
}

export default App
