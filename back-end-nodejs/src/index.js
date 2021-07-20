import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import messageRoutes from './routes/messages.js';

dotenv.config();
const server = express();
server.use(bodyParser.json());
server.use(cors());

server.use('/messages', messageRoutes);

mongoose.connect(
    process.env.MONGOOSE_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (error) {
            console.log(`Could not connect to the database:`, error);
            return;
        }
        console.log('Database is up and running');
    });

server.listen(process.env.PORT, () => {
    console.log(`Express is up and running on port ${process.env.PORT}`);
});