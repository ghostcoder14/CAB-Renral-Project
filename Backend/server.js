import http from 'http'
import app from './app.js';
import connectDB from './DB/db.js';

const port = process.env.PORT || 3000 

const server = http.createServer(app)

connectDB()

server.listen(port, ()=>{
    console.log(`The PORT is runinng on ${port}`)
})


 