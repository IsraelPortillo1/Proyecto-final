import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mocksRouter from './routes/mocks.router.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/mocks', mocksRouter);

export default app;