import dotenv from "dotenv"
dotenv.config();
import express from "express"
const app = express();
import cors from 'cors'

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
});


export default app;
