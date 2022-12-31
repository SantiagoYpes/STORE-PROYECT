import { config } from "dotenv";

config()

export const URI = 
    process.env.MONGODB_URI || "mongodb://mongo:F8iSJ0d6sDTBkzulvEn5@containers-us-west-173.railway.app:6170"
