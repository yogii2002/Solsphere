import React from 'react';
import { motion } from 'framer-motion';

export default function MachineItem({ m }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-cardbg rounded-lg shadow-lg p-6 border border-gray-700 hover:shadow-2xl transition-shadow duration-300"
      style={{ fontFamily: 'Inter, sans-serif', color: 'white' }}
    >
      <h3 className="text-xl font-bold mb-3 text-center">{m.machineId}</h3>
      <p className="text-sm text-gray-400 mb-4 text-center">
        Last checked: {new Date(m.timestamp).toLocaleString()}
      </p>

      <p className="mb-3 text-lg font-semibold text-center">
        Disk Encryption Status:{' '}
        {m.encrypted ? (
          <span className="text-green-400">Encrypted </span>
        ) : (
          <span className="text-red-400">Not Encrypted </span>
        )}
      </p>

      <p className="mb-3 text-lg font-semibold text-center">
        Antivirus Status:{' '}
        {m.antivirus ? (
          <span className="text-green-400">Active </span>
        ) : (
          <span className="text-red-400">Inactive </span>
        )}
      </p>

      <p className="mb-3 text-lg font-semibold text-center">
        Inactivity Sleep Setting:{' '}
        {m.sleepOk ? (
          <span className="text-green-400">Sleep ≤ 10 minutes </span>
        ) : (
          <span className="text-red-400">Sleep &gt; 10 minutes </span>
        )}
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-1">
        {!m.encrypted && <li>Disk unencrypted</li>}
        {!m.osUpdated && <li>OS outdated</li>}
        {!m.antivirus && <li>Antivirus off</li>}
        {!m.sleepOk && <li>Sleep &gt; 10 minutes</li>}
        {m.encrypted && m.osUpdated && m.antivirus && m.sleepOk && (
          <li className="text-green-400 font-semibold">All systems OK</li>
        )}
      </ul>
    </motion.div>
  );
}




import React, { useEffect, useState } from 'react';
import { fetchSystems } from '../../services/api.js';
import MachineItem from './MachineItem.jsx';
import { AnimatePresence } from 'framer-motion';

export default function MachineList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchSystems().then(r => setList(r.data));
  }, []);

  return (
    <div
      className="p-8 min-h-screen bg-darkbg"
      style={{ fontFamily: 'Inter, sans-serif', color: 'white' }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">System Machines Status</h1>
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
