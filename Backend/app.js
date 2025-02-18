import dotenv from "dotenv"
dotenv.config();
import express from "express"
const app = express();
import cors from 'cors'
import userRouter from "./routes/user.routes.js";

app.use(cors());
app.use(express.json())
app.use(express.static("public"));
app.use(express.urlencoded({extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World')
});


app.use('/api/v1/', userRouter)

export default app;
