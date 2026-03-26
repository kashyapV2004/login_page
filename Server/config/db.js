const mongoose = require("mongoose");
const mongo_url = process.env.MONGO_URL;

const connectDB = async() => {
    try {
        await mongoose.connect(mongo_url);
        console.log("database connected successfully...");
    }catch(e){
        console.log(e);
    }
}
module.exports = connectDB;