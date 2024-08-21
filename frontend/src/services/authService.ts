import axios from 'axios';

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  role: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

const API_URL = 'http://localhost:5500/api/auth';

export const authService = {
  signup: async (data: SignupData) => {
    const response = await axios.post(`${API_URL}/signup`, data);
    return response.data;
  },
  login: async (data: LoginData) => {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  },
};
