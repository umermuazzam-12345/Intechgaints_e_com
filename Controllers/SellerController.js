import SellerModel from '../Models/sellerModel.js'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: 'dmrfmqbt0',
    api_key: '315144386524555',
    api_secret: '2sE8SIH-Es35ZWeap5ItQ65JgOA',
    secure: true
});



// REGISTER A SELLER 

export const registerSeller=async(req,res)=>{
    const {firstname,lastname,email,password,image}=req.body; 

    const seller= new SellerModel({firstname,lastname,email,password,image})
   
    try {
        // cloudinary.uploader.upload(file.tempFilePath,async(err,result)=>{
            // console.log(result);
            // seller.image=result.url
            await seller.save()
            res.status(200).json(seller)
        // })
    } catch (error) {
        res.status(500).json(error)
    }
    
}




// DELETE A SELLER 

export const deleteSeller=async(req,res)=>{
    const id= req.params.id
    const { currentUserId }=req.body;
 
    try {
        if(id==currentUserId)
        {
            await SellerModel.findByIdAndRemove(id)
            res.status(200).json("Seller deleted")
        }
        else{
            res.status(403).json("Sorry You can only delete your own acount")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}