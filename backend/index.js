
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Built-in Express middleware instead of body-parser



app.get('/', (req, res) => {
    res.send('Hello World!');
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB;
});






