import ProductModel from '../Models/productModel.js';
import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({
    cloud_name: 'dmrfmqbt0',
    api_key: '315144386524555',
    api_secret: '2sE8SIH-Es35ZWeap5ItQ65JgOA',
    secure: true
});

// REGISTER A PRODUCT 

export const registeProduct = async (req, res) => {
    const { title, desc, price, sellerid,image } = req.body;
    console.log("image: ",image);
    console.log("req.body :", req.body)
    const file = req.file
    console.log("file : ", file);
    // cloudinary.uploader.upload(file.path, async(err, result) => {
    //     if (err) return console.log("Error : ", err);
    //     console.log("Result : ", result);

    //     const product = new ProductModel({ title, desc, price, sellerid, image: result.url })
    //     try {
    //         await product.save()
    //         res.status(200).json(product)
    //     } catch (error) {
    //         res.status(500).json(error)
    //     }
    // })
    res.send("Hello")
}

// GET ALL PRODUCTS 
export const getProducts = async (req, res) => {
    // cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
    //     console.log(result); 
    console.log("fetch products");
    // const product = new ProductModel({ title, desc, price, sellerid, image })

    try {
        const products = await ProductModel.find({})

        res.status(200).json(products)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
    // })
}


// DELETE A PRODUCT 

export const deleteProduct = async (req, res) => {
    const productId = req.params.id
    const { currentUserId } = req.body;

    try {
        const product = await ProductModel.findById(productId)
        if (product.sellerid == currentUserId) {
            await ProductModel.findByIdAndRemove(productId)
            res.status(200).json("Product deleted")
        }
        else {
            res.status(403).json("Sorry You can only delete your own Product")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}