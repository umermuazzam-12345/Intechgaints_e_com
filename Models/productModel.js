import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true, 
    },
    sellerid: {
        type: String,
        required: true
    },
    image:String
}, { timestamps: true })

const ProductModel = mongoose.model("Products", ProductSchema)

export default ProductModel