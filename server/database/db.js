import mongoose from "mongoose";



const Connection = async (username, password) => {
       const URL = `mongodb://${username}:${password}@ac-2mszkby-shard-00-00.iwwvrey.mongodb.net:27017,ac-2mszkby-shard-00-01.iwwvrey.mongodb.net:27017,ac-2mszkby-shard-00-02.iwwvrey.mongodb.net:27017/EMPLOYEES?ssl=true&replicaSet=atlas-y756jt-shard-0&authSource=admin&retryWrites=true&w=majority`;

       try {
       await  mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true})
        console.log('Database Connected Successfuly');
       }catch (error) {

       }
}

export default Connection