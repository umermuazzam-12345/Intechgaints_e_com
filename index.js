import express from 'express'
import mongoose from 'mongoose';
import AdminRoute from './Routes/AdminRoute.js'
import CustomerRoute from './Routes/CustomerRoute.js'
import SellerRoute from './Routes/SellerRoute.js'
import ProductRoute from './Routes/ProductRoute.js'
import cors from 'cors'
import fileUpload from 'express-fileupload';
import path from 'path'
import * as url from 'url';
// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import dotenv from 'dotenv'



dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
const port = 5000
app.use(fileUpload({
  useTempFiles: true
}));

const db= process.env.MONGODB_ATLAS
console.log(db);
app.use(express.static(path.join(__dirname, "./react1st/build")));
console.log(__dirname);
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./react1st/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

mongoose.connect(db)
  .then(() => app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })).catch((err) => console.log(err))


app.use('/admin', AdminRoute)
app.use('/customer', CustomerRoute)
app.use('/seller', SellerRoute)
app.use('/product', ProductRoute)
