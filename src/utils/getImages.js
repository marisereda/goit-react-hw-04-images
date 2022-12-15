import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '30496940-a6648cb8580d319c300be0950';
const PAGE_SIZE = 12;

export async function getImages(search, page) {
  const params = {
    q: search,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PAGE_SIZE,
    page: page,
  };

  try {
    const response = await axios.get(URL, { params });
    if (response.data.hits.length === 0) {
      throw Error('There is no any match on your request!');
    }
    return response.data;
  } catch (error) {
    console.log(error.config);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw Error('There is no server response. Try later again!');
    } else if (error.request) {
      console.log(error.request);
      throw Error('There is no server response. Try later again!');
    } else {
      console.log('Error', error.message);
      throw error;
    }
  }
}
