import React from 'react';
export default function MachineItem({ m }) {
  const issues = [];
  if (!m.encrypted) issues.push('Disk unencrypted');
  if (!m.osUpdated) issues.push('OS outdated');
  if (!m.antivirus) issues.push('Antivirus off');
  if (!m.sleepOk) issues.push('Sleep>10min');
  return (
    <div className="card p-4 m-2 shadow">
      <h4>{m.machineId}</h4>
      <p>Last: {new Date(m.timestamp).toLocaleString()}</p>
      <ul>{issues.map(i => <li key={i}>{i}</li>)}</ul>
    </div>
  );
}