import express from 'express'
import { deleteCustomer, deleteProduct, deleteSeller, registerAdmin } from '../Controllers/AdminController.js'

const router= express.Router()

router.post("/register",registerAdmin)
router.delete("/:id",deleteCustomer) 
router.delete("/seller/:id",deleteSeller) 
router.delete("/product/:id",deleteProduct) 


export default router