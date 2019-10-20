require('dotenv').config();
import fetchData from './fetchData';
import exportData from './informationExtractor';

const main = async () => {
  console.log('First call');

  const response = await fetchData();

  const data = exportData(response.data);

  console.log(data);

  console.log('Second call');
};

main();
