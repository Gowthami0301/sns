import { User, IUser } from '../models/User';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwtUtils';

export const signup = async (userData: IUser) => {
    console.log("userData",userData);
    
  const existingUser = await User.findOne({ email: userData.email });
  console.log("existingUser",existingUser);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const user = new User(userData);
  await user.save();
  console.log("user",user);

  return {
    token: generateToken(user),
    user: { id: user._id, email: user.email, role: user.role },
  };
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  return {
    token: generateToken(user),
    user: { id: user._id, email: user.email, role: user.role },
  };
};
