import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/api/auth/:userId/role',
  async (req: Request, res: Response) => {
    res.send('User role assign activated');
  }
);

export { router as assignRoleRouter };