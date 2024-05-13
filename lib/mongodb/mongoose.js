import mongoose from "mongoose";

let isConnected = false;

export const connectMongoDB = async () => {
    
    mongoose.set("strickQuery", true);

    if( isConnected ) {
        console.log("MongoDB already connected!!");
        return;
    }
    
    try {
        mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'socialmediaapp',
            // useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        isConnected = true;

        console.log("MongoDB connected!!!");

    } 
    catch ( error ){
        console.log(error);
    }





}