import { config } from "dotenv";

config()

export const URI = 
    process.env.MONGODB_URI || "mongodb+srv://santiyepes:admin123@cluster0.ths3gvo.mongodb.net/myDB?retryWrites=true&w=majority"

export const PORT =
    process.env.PORT ||3000