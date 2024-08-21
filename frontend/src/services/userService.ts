import axios from 'axios';
import { IUser } from '../types/User';

const API_URL = 'http://localhost:5500/api/users';

export const userService = {
  listUsers: async () => {
    const response = await axios.get<IUser[]>(API_URL);
    return response.data;
  },
};
