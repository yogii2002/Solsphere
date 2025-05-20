import React, { useEffect, useState } from 'react';
import { fetchSystems } from '../../services/api.js';
import MachineItem from './MachineItem.jsx';
import { AnimatePresence } from 'framer-motion';

export default function MachineList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadSystems = async () => {
    setLoading(true);
    try {
      const res = await fetchSystems();
      setList(res.data);
    } catch (error) {
      console.error('Failed to fetch systems:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSystems();
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-center w-full">System Machines Status</h1>
        <button
          onClick={loadSystems}
          className="absolute right-8 top-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition"
        >
          {loading ? 'Refreshing...' : 'Refresh 🔄'}
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {list.map(m => (
            <MachineItem key={m._id} m={m} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
