import express from 'express'
import { deleteProduct, getProducts, registeProduct } from '../Controllers/ProductController.js';  
import multer from 'multer';
const upload = multer({dest: 'uploads/'});

const router= express.Router()

router.post("/register",upload.single('image'),registeProduct)
router.delete("/:id",deleteProduct)
router.get("/fetch",getProducts)


export default router;