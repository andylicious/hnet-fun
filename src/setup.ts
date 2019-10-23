require('dotenv').config();
import createJob from './scheduler';
import getNewRecords from './fetchData';
import mongoose from 'mongoose';

// TODO: LOGGER
const setup = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CONNECTION_STRING}/${process.env.MONGO_DB_DATABASE}`,
      { useNewUrlParser: true }
    );
    console.log('Connected to database');
  } catch (e) {
    throw new Error('Failed connecting to database');
  }

  const job = createJob('*/30 * * * * *', getNewRecords);
  job.start();
};

export default setup;
