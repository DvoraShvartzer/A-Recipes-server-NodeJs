const mongoose = require('mongoose');

// const DB_URL = "mongodb+srv://noag2097:dvory4611@cluster0.mo55p.mongodb.net/"
const DB_URL =process.env.MONGODB_URI||  "mongodb://localhost:27017/"


async function connectToDB() {
    try {

        await mongoose.connect(DB_URL);
        console.log('mongo connected'); 
      
    } catch (error) { 
        console.log('mongo failed', error);
    }

}
exports.connectToDB = connectToDB;`1`