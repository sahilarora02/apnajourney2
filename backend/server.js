import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connectToMongoDB } from './database/connection.js';
import userRoutes from './routes/userRouter.js';
import ErrorHandler from './middlewares/error.js';

const app = express();

config({ path: './config/config.env' });

connectToMongoDB();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.use('/api/v1/user', userRoutes);

app.use(ErrorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
