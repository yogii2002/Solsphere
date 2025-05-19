const { exec } = require('child_process');
async function checkOSUpdate() {
  const os = process.platform;
  return new Promise(resolve => {
    if (os === 'darwin') exec('softwareupdate -l', (_, out) => resolve(!/No new software available/.test(out)));
    else if (os === 'win32') exec('powershell -Command "Get-WindowsUpdateLog"', (_, out) => resolve(out.includes('KB')));
    else exec('apt list --upgradable', (_, out) => resolve(!/upgradable/.test(out)));
  });
}
module.exports = checkOSUpdate;