import mongoose from "mongoose";
const connectMongodb= async() => {
    try {
        mongoose.connect(process.env.MONGODB_URL);
        console.log('connect mongodb');
    } catch (error) {
        console.log(error);
    }
}

export default connectMongodb;