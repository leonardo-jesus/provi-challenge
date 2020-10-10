import axios from 'axios';

const ROOT_URL = 'https://www.mocky.io';

const api = axios.create({
  baseURL: ROOT_URL,
});

export const getUserData = async () => {
  const { data } = await api.get('/v2/5c923b0932000029056bce39');
  return data;
}

// export const getUserData = async () => {
//   const req = await fetch('http://www.mocky.io/v2/5c923b0932000029056bce39');
//   const res = await req.json();

//   return res.name;
// };