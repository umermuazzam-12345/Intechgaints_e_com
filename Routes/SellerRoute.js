import express from 'express'
import { deleteSeller, registerSeller } from '../Controllers/SellerController.js'

const router= express.Router()

router.post("/register",registerSeller) 
router.delete("/:id",deleteSeller) 


export default router