import express from 'express'
import { deleteCustomer, loginCustomer, profile, registerCustomer } from '../Controllers/CustomerController.js';
import verification from '../Middlewares/verification.js'


const router= express.Router()

router.post("/register",registerCustomer)
router.post("/login",loginCustomer)
router.post("/profile",verification,profile)
router.delete("/:id",deleteCustomer)


export default router