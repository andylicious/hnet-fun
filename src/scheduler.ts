const CronJob = require('cron').CronJob;

const createJob = (interval: string, action: any) => {
  console.log('Before job instantiation');
  const job = new CronJob(interval, function() {
    console.log('Executing action');
    action();
    console.log('Action executed');
  });

  return job;
};

export default createJob;
