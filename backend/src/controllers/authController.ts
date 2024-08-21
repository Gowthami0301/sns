import { Request, Response } from 'express';
import { signup, login } from '../services/authService';

export const handleSignup = async (req: Request, res: Response) => {
  try {
    const result = await signup(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const handleLogin = async (req: Request, res: Response) => {
  try {
    const result = await login(req.body.email, req.body.password);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
