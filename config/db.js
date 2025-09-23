// import mongoose from "mongoose";
// let cached = global.mongoose
// if(!cached){
//     cached=global.mongoose={conn:null , Promise:null}
// }
// async function connectDB() {
//     if(cached.conn){
//     return cached.conn
//     }
//     if(!cached.Promise){
//         const opts ={
//             bufferCommands:false
//         }
//         cached.Promise=mongoose.connect(`$ {process.env.MONGODB_URI}/Quickcart`,opts).then(mongoose =>{
//             return mongoose
//         })

//     }
//     cached.conn = await cached.Promise
//     return cached.conn
    
// }

// export default connectDB

// src/config/db.js  (or wherever your DB file is)
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;
if (!MONGO_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}
const cached = global.mongoose;

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    // NOTE: we append the DB name here; keep MONGODB_URI without trailing slash
    cached.promise = mongoose.connect(`${MONGO_URI}/Quickcart`, opts).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
