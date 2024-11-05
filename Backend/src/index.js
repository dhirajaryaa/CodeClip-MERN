import { connectDB } from './db/index.js';
import dotenv from 'dotenv';
import { app } from './app.js';

// dotenv configuration
dotenv.config({
  path: './.env',
});

// port setup 
const Port = process.env.PORT || 5000;

// mongodb connection
connectDB()
  .then(() => {
    // Express server error handling 
    app.on('error', (err) => {
      console.log('Express server error: ', err);
      process.exit(1);
    });

    // express server listening 
    app.listen(Port,()=>{
        console.log("Server running on port no: ",Port);
        
    })
  })
  .catch((error) => {
    console.error('MongoDB connection error: ', error);
    process.exit(1);
  });
