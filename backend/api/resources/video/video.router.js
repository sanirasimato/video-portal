import express from 'express';
import videoController from './video.controller';

export const videoRouter = express.Router();

videoRouter.route('/')
    .get(videoController.getVideos)
    .post(videoController.createVideo);