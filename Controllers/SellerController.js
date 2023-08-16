import SellerModel from '../Models/sellerModel.js' 
import jwt from 'jsonwebtoken'
const secKey = "this is my string for jsonwebtoken"


// REGISTER A SELLER 

export const registerSeller = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    const seller = new SellerModel({ firstname, lastname, email, password })

    try {
        await seller.save()
        jwt.sign({ seller }, secKey, { expiresIn: '2000h' }, (err, token) => {
            res.status(200).json({ token, seller })
        })
        // })
    } catch (error) {
        res.status(500).json(error)
    }

}




// DELETE A SELLER 

export const deleteSeller = async (req, res) => {
    const id = req.params.id
    const { currentUserId } = req.body;

    try {
        if (id == currentUserId) {
            await SellerModel.findByIdAndRemove(id)
            res.status(200).json("Seller deleted")
        }
        else {
            res.status(403).json("Sorry You can only delete your own acount")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}