import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
}, { timestamps: true })

const SellerModel = mongoose.model("Sellers", SellerSchema)

export default SellerModel