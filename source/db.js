//import mongoose from "mongoose"
//const mongoose = require('mongoose');
import mongoose from "mongoose"
import {URI} from "./config"

(async ()=>{
    try{
        mongoose.set('strictQuery', true)
        const db = await mongoose.connect(URI)
        console.log("DB connected", db.connection.name )
    }
    catch{
        console.error("error")
    }
    
})()