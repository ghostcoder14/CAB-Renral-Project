import dotenv from "dotenv"
dotenv.config();
import express from "express"
const app = express();
import cors from 'cors'
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import captainRouter from './routes/captain.route.js';

app.use(cors({
    origin: ["http://localhost:5173"], 
    credentials: true 
}));

app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello World')
});


app.use('/user', userRouter)

app.use('/captain', captainRouter)

export default app;
