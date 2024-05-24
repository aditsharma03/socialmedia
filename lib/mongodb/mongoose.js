import mongoose from "mongoose";

let isConnected = false;

export const connectMongoDB = async () => {
    
    mongoose.set("strictQuery", true);

    if( isConnected ) {
        console.log("MongoDB already connected!!");
        return;
    }
    
    try {

        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'socialmedia',
        })
        
        isConnected = true;

        console.log("MongoDB connected!!!");

    } 
    catch ( error ){
        console.log(error);
    }

};