import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/database/connection.js';
import productRoutes from './src/routes/Product.js'
import errorHandler from './src/middleware/errorHandler.js';

dotenv.config();  

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/products', productRoutes);

// Global error handler (must be last)
app.use(errorHandler);


// connect to DB
connectDB();

app.get('/health', (req, res) => {
  res.send('Server is up and running 🚀');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
