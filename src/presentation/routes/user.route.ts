import express from 'express'

import { Router, Request, Response } from 'express';

import { makeUserController } from '../factories/controller.factory';

const userController = makeUserController();

const userRoutes = Router();

// User
userRoutes.post('/', userController.create.bind(userController));
userRoutes.get('/', userController.findAll.bind(userController));
userRoutes.get('/:id', userController.find.bind(userController));
userRoutes.put('/status/:id', userController.changeStatus.bind(userController));

export default userRoutes;