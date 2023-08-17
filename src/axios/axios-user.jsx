import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { toast } from 'react-hot-toast';

export const createUser = async (name, email, password) => {
  try {
    const respone = await axios.post(`${BASE_URL}/auth/register`, {
      name,
      email,
      password,
    });

    return respone.data;
  } catch (error) {
    return toast(error.response.data.errors[0].msg, {
      style: {
        borderRadius: '10px',
        background: 'var(--auburn)',
        color: 'var(--smoke)',
      },
    });
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
