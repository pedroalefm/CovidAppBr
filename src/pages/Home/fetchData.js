import axios from 'axios';

export const fetchData = () => {
  const urlData = 'https://covid19-brazil-api.now.sh/api/report/v1';
  const data = axios.get(urlData).then((res) => {
    return res.data.data;
  });
  return data;
};
