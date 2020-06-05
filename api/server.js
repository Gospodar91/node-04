import express from 'express'
import cookierParser from 'cookie-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import { authRouter } from './auth/router';
require("dotenv").config();
export class AuthServer{
    

constructor(){
    this.app=null
}

     async start(){
        this.initServer();
        this.initMiddle();
        await this.initDatabase()
        this.initRoutes()
 
        this.startListening()
    }

initServer(){
    this.app=express()
}
 initMiddle(){
    this.app.use(express.json())
    this.app.use(cookierParser())
    this.app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
    
}
async initDatabase(){
    mongoose.set("useCreateIndex",true)
    await mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true, 
        useFindAndModify:true
    })
    

}
initRoutes(){
 
    this.app.use('/auth',authRouter)

}

startListening(){
    const{PORT}=process.env
    this.app.listen( PORT,()=>{
        console.log('server listening on', PORT)
    })
}
}