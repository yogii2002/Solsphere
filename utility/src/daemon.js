const schedule = require('node-schedule');
const reportIfChanged = require('./index');
let lastState = null;
// run every 30 minutes
schedule.scheduleJob('*/1 * * * *', async () => {
  lastState = await reportIfChanged(lastState);
});
console.log('Daemon started: checking every 1 minutes');