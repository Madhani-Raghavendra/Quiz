import express from "express";
import cors from 'cors'
import { config } from "dotenv";
import connect from "./database/conn.js";
import route from "./router/route.js";

const app = express()


// // middle ware
app.use(cors())//middle ware to resolve cors issue
app.use(express.json())
config()
app.use('', route)

const port = process.env.PORT || 5000
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log('listening to 5000')
        })
        //if any error in server
    } catch (err) {
        console.log('cannot connect with the server')
    }
    //if any error in mongoose 
}).catch(err => {
    console.log('failed to connect with the database', err)
})

