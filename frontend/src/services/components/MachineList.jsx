import React, { useEffect, useState } from 'react';
import { fetchSystems } from '../../services/api.js';
import MachineItem from './MachineItem.jsx';
export default function MachineList() {
  const [list, setList] = useState([]);
  useEffect(() => { fetchSystems().then(r => setList(r.data)); }, []);
  return (
    <div className="grid grid-cols-3">{list.map(m => <MachineItem key={m._id} m={m}/>)}</div>
  );
}