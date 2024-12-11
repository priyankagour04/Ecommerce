// connecting mongodb database with node

const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONNECTION;

mongoose.connect(mongo_url)
.then(()=>{
    console.log('MongoDB Connected...');
})
.catch((err)=>{
console.log("MongoDB Connection error :" , err)
})