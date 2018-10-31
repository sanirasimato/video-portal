import Video  from './video.model';

export default {

    // Create videos
    async createVideo(req, res) {

        try {

            const video = await Video.create(req.body);
            return res.json({ status: 'SUCCESS', data: video });
            
        } catch (error) {
            
            console.error('Error occrred at UserController.create : error => ' + error);
            return res.status(500).send(error);
        }
    },

    // Get all videos
    async getVideos(req, res) {
        
        try {

            const videos = await Video.find();
            return res.json({ status: 'SUCCESS', data: videos });
            
        } catch (error) {
            
            console.error('Error occrred at UserController.getUsers : error => ' + error);
            return res.status(500).send(error);
        }
    }
}