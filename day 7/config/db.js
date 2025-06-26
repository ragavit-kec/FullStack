import mongoose from 'mongoose';

export const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/_22ISR026');
        console.log('MongooDB connected');
    }catch (error) {
        console.log(error);
    }
}