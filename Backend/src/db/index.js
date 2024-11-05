import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

export const connectDB = async () => {
  try {
    const connectionInstants = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log('Connected to MongoDB: ', connectionInstants.connection.host);
  } catch (error) {
    console.error('Failed to connect to MongoDB: ', error);
    throw error;
  }
};
