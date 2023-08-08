import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
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
    image:String,
    isadmin: {
        type: Boolean,
        default: false
    },
    isCustomer: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const CustomerModel = mongoose.model("Customers", CustomerSchema)

export default CustomerModel