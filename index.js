import express from 'express'
import mongoose from 'mongoose';
import AdminRoute from './Routes/AdminRoute.js'
import CustomerRoute from './Routes/CustomerRoute.js'
import SellerRoute from './Routes/SellerRoute.js'
import ProductRoute from './Routes/ProductRoute.js'
import cors from 'cors' 
import fileUpload from 'express-fileupload';
import multer from 'multer'
const upload = multer({ dest: 'uploads/' })


const app = express()
app.use(express.json())
app.use(cors())
const port = 3001
app.use(fileUpload({
  useTempFiles:true
}))

mongoose.connect('mongodb://0.0.0.0:27017/e-commerce')
.then(() => app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})).catch((err) => console.log(err))


app.use('/admin', AdminRoute)
app.use('/customer', CustomerRoute)
app.use('/seller', SellerRoute)
app.use('/product', ProductRoute)





app.post("/images",upload.single('image'),(req,res)=>{
  const file= req.file;
  console.log(file);
  const desc= req.body.description
  res.send("")
})




