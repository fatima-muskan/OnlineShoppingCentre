import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

// configure env
dotenv.config();

// rest object
const app=express()

//rest api
app.get('/', (req,res) => {
    res.send("<h1>Welcome to Ecommerce App</h1>")
})

//port
const PORT=process.env.PORT || 8080 ;

app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.Dev_Mode} mode on port ${PORT}`.bgCyan.white);
})