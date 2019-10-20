import axios from 'axios';

const fetchData = () => {
  const response = axios.get(process.env.HEMNET_SEARCH_QUERY);

  return response;
};

export default fetchData;
