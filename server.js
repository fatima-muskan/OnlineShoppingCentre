import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';

// configure env
dotenv.config();

// database config
connectDB();

// rest object
const app=express()

// middleware
app.use(express.json())
app.use(morgan('dev'));

app.use('/api/v1/auth', authRoutes)

//rest api
app.get('/', (req,res) => {
    res.send("<h1>Welcome to Ecommerce App</h1>")
})

//port
const PORT=process.env.PORT || 8080 ;

app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.Dev_Mode} mode on port ${PORT}`.bgCyan.white);
})