require('dotenv').config();
const CronJob = require('cron').CronJob;
import filterArrays from './utils/filter';
import fetchData from './fetchData';
import CondoModel, { postMany } from './models/condo';
import mongoose from 'mongoose';

// TODO: LOGGER
const main = async () => {
  // console.log('First call');
  // TODO: Refactor this and cron job to own setup function
  // try {
  //   await mongoose.connect(
  //     `mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CONNECTION_STRING}/${process.env.MONGO_DB_DATABASE}`,
  //     { useNewUrlParser: true }
  //   );
  //   console.log('Connected');
  // } catch (e) {
  //   console.log('Failed connecting');
  // }

  console.log('Before job instantiation');
  const job = new CronJob('*/5 * * * * *', function() {
    console.log('Job running');
  });
  console.log('After job instantiation');
  job.start();

  // TODO: Refactor to its own function
  // const existingRecords = CondoModel.find({});
  // const newRecords = fetchData();
  // const records = await Promise.all([existingRecords, newRecords]);

  // const saveRecords = filterArrays(
  //   records[1],
  //   records[0].map((item: any) => item.id)
  // );

  // try {
  //   await postMany(saveRecords);

  //   console.log('Posted items');
  // } catch (e) {
  //   console.log('Faile posting to DB');
  // }

  // console.log('Second call');
};

main();
