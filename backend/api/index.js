import express from 'express';
import { userRouter } from './resources/user';
import { videoRouter } from './resources/video';

export const restRouter = express.Router();

restRouter.use('/user', userRouter);
restRouter.use('/video', videoRouter);