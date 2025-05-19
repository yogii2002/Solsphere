const axios = require('axios');
const checkDiskEncryption = require('./checks/diskEncryption');
const checkOSUpdate = require('./checks/osUpdate');
const checkAntivirus = require('./checks/antivirus');
const checkSleepSetting = require('./checks/sleepSetting');
async function collectStatus() {
  return {
    machineId: require('os').hostname(),
    timestamp: new Date(),
    encrypted: await checkDiskEncryption(),
    osUpdated: await checkOSUpdate(),
    antivirus: await checkAntivirus(),
    sleepOk: await checkSleepSetting(),
  };
}
async function reportIfChanged(prev) {
  const curr = await collectStatus();
  if (!prev || JSON.stringify(prev) !== JSON.stringify(curr)) {
    await axios.post('http://localhost:5000/api/system', curr);
    return curr;
  }
  return prev;
}
module.exports = reportIfChanged;