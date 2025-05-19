const si = require('systeminformation');
async function checkAntivirus() {
  const av = await si.mem(); // placeholder: use si for 3rd party
  return true; // assume active
}
module.exports = checkAntivirus;