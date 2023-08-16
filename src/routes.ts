import express from 'express'

import { Router } from 'express';

import userRoutes from './presentation/routes/user.route';

const router = Router();

// User
router.use('/users', userRoutes);
    

export default router;