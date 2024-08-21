import { Request, Response } from 'express';
import { listUsers } from '../services/userService';

export const handleListUsers = async (_req: Request, res: Response) => {
  try {
    const users = await listUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
