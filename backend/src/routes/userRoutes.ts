import { Router } from 'express';
import { handleListUsers } from '../controllers/userController';

const router = Router();

router.get('/', handleListUsers);

export default router;
