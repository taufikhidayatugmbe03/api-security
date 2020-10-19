import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        last_name: {
            type: String,
            required: true,            
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,            
        },
        position: {
            type: Number,
            required: true,         
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

export default User;