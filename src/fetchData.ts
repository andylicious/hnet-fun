import axios from 'axios';
import generateData from './informationExtractor';

const fetchData = async () => {
  const response = await axios.get(process.env.HEMNET_SEARCH_QUERY);

  const condos = generateData(response.data);

  return condos;
};

export default fetchData;
