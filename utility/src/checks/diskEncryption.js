const si = require('systeminformation');
async function checkDiskEncryption() {
  const os = process.platform;
  if (os === 'win32') {
    const info = await si.osInfo();
    return info.serial ? true : false; // placeholder for BitLocker
  } else if (os === 'darwin') {
    const fv = await si.fsSize();
    return fv.every(d => d.encrypted === true);
  } else { // linux
    // Linux LUKS check via system command
    const { exec } = require('child_process');
    return new Promise(resolve => {
      exec('lsblk -o NAME,TYPE,MOUNTPOINT | grep crypt', (e, out) => resolve(!!out));
    });
  }
}
module.exports = checkDiskEncryption;