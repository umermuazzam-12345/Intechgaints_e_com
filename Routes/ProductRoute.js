import express from 'express'
import { deleteProduct, registeProduct } from '../Controllers/ProductController.js';

const router= express.Router()

router.post("/register",registeProduct)
router.delete("/:id",deleteProduct)


export default router;