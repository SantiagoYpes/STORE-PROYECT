//import mongoose from "mongoose"
//const mongoose = require('mongoose');
import mongoose from "mongoose"
import {URI} from "./config"

(async ()=>{
    try{
        mongoose.set('strictQuery', true)
        console.log(URI)
        const db = await mongoose.connect(URI)
        console.log("DB connected", db.connection.name )
    }
    catch (error){
        console.error(error)
    }
    
})()