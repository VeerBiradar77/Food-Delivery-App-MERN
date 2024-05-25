import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://veerbiradar:8308267924@cluster0.yek108h.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}