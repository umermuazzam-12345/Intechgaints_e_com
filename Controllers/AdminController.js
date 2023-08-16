import CustomerModel from "../Models/customerModel.js";
import SellerModel from "../Models/sellerModel.js";
import ProductModel from "../Models/productModel.js";

// REGISTER A ADMIN 

export const registerAdmin = async (req, res) => {
    const { firstname, lastname, email, password, adminStatus } = req.body; 

        const admin = new CustomerModel({ firstname, lastname, email, password, isadmin: adminStatus })
        try {
            const allreadyAdmin = await CustomerModel.findOne({ isadmin: adminStatus })
            if (adminStatus && !allreadyAdmin) {

                await admin.save()
                res.status(200).json("admin is registered")
            }
            else {
                res.status(403).json("admin is all ready registered")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    // })

}


// DELETE CUSTOMER  

export const deleteCustomer = async (req, res) => {
    const id = req.params.id

    try {
        const user = await CustomerModel.findById(id)
        if (user) {
            await CustomerModel.findByIdAndRemove(id)
            res.status(200).json("Customer deleted")
        }
        else {
            res.status(403).json("Customer all ready deleted")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


// DELETE SELLER  

export const deleteSeller = async (req, res) => {
    const id = req.params.id

    try {
        const user = await SellerModel.findById(id)
        const sellerProducts = await ProductModel.find({ sellerid: id }) // if seller have products
        if (sellerProducts) {
            await ProductModel.deleteMany({ sellerid: id })  // delete all products belong to seller before deleting him
        }
        if (user) {
            await SellerModel.findByIdAndRemove(id)
            res.status(200).json("Seller is deleted")
        }
        else {
            res.status(403).json("Seller all ready deleted")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}



// DELETE PRODUCT  

export const deleteProduct = async (req, res) => {
    const productid = req.params.id

    try {
        const product = await ProductModel.findById(productid)
        if (product) {
            await ProductModel.findByIdAndRemove(productid)
            res.status(200).json("Product is deleted")
        }
        else {
            res.status(403).json("Product all ready deleted")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}