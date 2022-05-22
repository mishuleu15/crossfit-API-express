import axios from 'axios';

export const fetchData = () => {
  const url = 'http://localhost:4000/api/v1/workouts';

  try {
    const { data } = axios.get(url);

    return data;
  } catch (error) {
    console.log(error);
  }
};
