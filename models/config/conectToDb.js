const mongoose = require('mongoose');

 const DB_URL =process.env.MONGODB_URI|| "mongodb+srv://noag2097:dvory4611@cluster0.mo55p.mongodb.net/"

//const DB_URL = "mongodb://localhost:27017/";

async function connectToDB() {
    // db תנסה להתחבר ל
    try { // try/then
        // התחברות לדטהבייס
        await mongoose.connect(DB_URL);
        console.log('mongo connected'); // אם הצליח - הגיע לשורה הזו
      
    } catch (error) { // catch
        console.log('mongo failed', error); // אם היתה שגיאה בהתחברות
    }

    // mongoose.connect(DB_URL)
    //     .then(()=>console.log('mongo connected'))
    //     .catch(error => console.log('mongo failed', error))

    // console.log('hello');
}
exports.connectToDB = connectToDB;`1`