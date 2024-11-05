import express from 'express';
import { connectDB } from './db/index.js';
import dotenv from 'dotenv';


// dotenv configuration
dotenv.config({
    path: './.env'
}) 

// mongodb connection 
connectDB();

