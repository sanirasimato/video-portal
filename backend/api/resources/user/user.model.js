import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({

    firstName: {
        type: String,
        required: [true, 'Firstname needed']
    },

    lastName: {
        type: String,
        required: [true, 'Lastname needed']
    }
});

export default mongoose.model('User', userSchema);