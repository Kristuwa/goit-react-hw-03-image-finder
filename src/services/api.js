import axios from 'axios';

const KEY = '30242343-f6d10ec55d07081d5dcce6a52';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchApiGallery = async (searchWord, page) => {
  const response = await axios.get(
    `/?key=${KEY}&q=${searchWord}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
