import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js'

const PORT = process.env.PORT || 3000;
const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://0.0.0.0:5173"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/user', userRouter)

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

