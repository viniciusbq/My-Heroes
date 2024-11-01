import axios from 'axios';
import md5 from 'md5';
import config from '../config';

const publicKey = config.MARVEL_PUBLIC_KEY;
const privateKey = config.MARVEL_PRIVATE_KEY;

const generateHash = (timestamp: string | number) => {
  return md5(timestamp + privateKey + publicKey);
};

export const fetchMarvelCharacters = async () => {
  const timestamp = new Date().getTime();
  const hash = generateHash(timestamp);

  try {
    const response = await axios.get(
      'https://gateway.marvel.com/v1/public/characters',
      {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
          limit: 100,
          offset: 0,
        },
      }
    );

    return response.data.data.results;
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    throw error;
  }
};