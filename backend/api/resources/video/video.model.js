import mongoose from 'mongoose';
const { Schema } = mongoose;

const videoSchema = new Schema({

    videoName: {
        type: String,
        required: [true, 'Video name needed']
    },

    videoUrl : {
        type: String,
        required: [true, 'Video url needed']
    },

    userId: {
        type: String,
        required: [true, 'User Id needed']
    }
});

export default mongoose.model('Video', videoSchema);