import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { TaskPage } from './pages/TaskPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <TaskPage/>
      </div>
    </div>
  )
}

export default App
