import React, { useState } from 'react'

// React.FC -> Functional Component
const App:React.FC = () => {
  const [counter, setCounter] = useState<number>(0)
  return (
    <div>
        App
    </div>
  )
}

export default App