import { useState } from 'react'
import MachineList from './services/components/MachineList.jsx';

import './App.css'

function App() {
  

  return (
    <div>
     
      <div className="p-8  bg-gray-800 text-white">
        <h2 className="text-4xl mb-4  ">System Health Dashboard</h2>
        <p>Your system health get refresh every minute!</p>
        <MachineList />
      </div>
       
    </div>
  )
}

export default App
