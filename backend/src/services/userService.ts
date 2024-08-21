import { User } from '../models/User';

export const listUsers = async () => {
  return await User.find().select('-password');
};
