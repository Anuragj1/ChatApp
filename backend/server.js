import 'dotenv/config';
import http from 'http';
import express from 'express';
import app from './app.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);



server.listen(PORT, () => {
    console.log(`Server running in on Port ${PORT}`);  
});