import axios from 'axios';

export const call = async () => {
  return await axios.post('https://localhost:5001/api/users/register', {
    name: 'ali',
    email: 'ali@gmail.com',
    password: 'password',
  });
};
