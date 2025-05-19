import { useState } from 'react'
import MachineList from './services/components/MachineList.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
      <div className="p-8">
        <h1 className="text-2xl mb-4">System Health Dashboard</h1>
        <MachineList />
      </div>
       
    </div>
  )
}

export default App
