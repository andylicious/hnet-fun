import axios from 'axios';
import generateData from './informationExtractor';
import CondoModel, { postMany } from './models/condo';
import filterArrays from './utils/filter';

const fetchData = async () => {
  const response = await axios.get(process.env.HEMNET_SEARCH_QUERY);

  const condos = generateData(response.data);

  return condos;
};

const getNewRecords = async () => {
  const eR = CondoModel.find({});
  const nR = fetchData();
  const [existingRecords, newRecords] = await Promise.all([eR, nR]);

  const saveRecords = filterArrays(
    newRecords,
    existingRecords.map((item: any) => item.id)
  );

  if (saveRecords.length > 0) {
    try {
      await postMany(saveRecords);
      console.log('Posted items');
    } catch (e) {
      console.log('Faile posting to DB');
    }
  } else {
    console.log('No new items to save');
  }
};

export default getNewRecords;
