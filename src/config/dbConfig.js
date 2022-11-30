import mongoose from "mongoose";

mongoose.connect('mongodb+srv://ioshi:rafael04@cluster0.ybjsinh.mongodb.net/library-gladia');

let db = mongoose.connection;

export default db;