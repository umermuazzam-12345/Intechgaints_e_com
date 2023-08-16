import CustomerModel from "../Models/customerModel.js";
import jwt from 'jsonwebtoken'
const secKey = "this is my string for jsonwebtoken" 

export const registerCustomer = async (req, res) => { 
    const { firstname, lastname, email, password } = req.body; 

        const customer = new CustomerModel({ firstname, lastname, email, password})

        try {
            await customer.save()
            res.status(200).json(customer)
        } catch (error) {
            res.status(500).json(error)
        }

    }


// LOGIN CUSTOMER 
export const loginCustomer = async (req, res) => {
    const { email, password } = req.body;

    const customer = await CustomerModel.findOne({ email })
    try {
        if (customer.password == password) {
            jwt.sign({ customer }, secKey, { expiresIn: '2000h' }, (err, token) => {
                res.json({ token, customer })
            })
        }
        else {
            res.status(403).json("invalid password or email")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}



// PROFILE 
export const profile = async (req, res) => {
    jwt.verify(req.token, secKey, (err, authData) => {
        if (err) {
            res.send("token invalid")
        }
        else {
            res.json({
                result: "profile access",
                authData
            })
        }
    })

}


// DELETE A CUSTOMER 

export const deleteCustomer = async (req, res) => {
    const id = req.params.id
    const { currentUserId } = req.body;

    try {
        if (id == currentUserId) {
            await CustomerModel.findByIdAndRemove(id)
            res.status(200).json("Customer deleted")
        }
        else {
            res.status(403).json("Sorry You can only delete your own acount")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}