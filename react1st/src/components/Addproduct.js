import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Addproduct = () => {
    const sellerid = localStorage.getItem("sellerid");
    const [picture, setPicture] = useState({});

    var [form, setForm] = useState({
        title: "",
        desc: "",
        price: "",
        sellerid: sellerid,
        image: ''
    });

    const handleChange = (event, field) => {
        if(field=='image')
        {
            form.image= event.target.files[0]
            return console.log("image",form.image);
        }
        setForm({
            ...form,
            [field]: event.target.value,
        });
    };

    const submit = async(e) => {
        e.preventDefault()
        const formData= new FormData()
        formData.append("title",form.title)
        formData.append("desc",form.desc)
        formData.append("price",form.price)
        formData.append("image",form.image)
        console.log("picture is :", picture);
        console.log(form);
        if (!form.title || !form.desc || !form.price || !form.image) {
            return alert("Please enter valid credentials")
        }


        else {

            // fetch("http://localhost:5000/product/register/", {
            //     method: "POST",
            //     headers: {
            //         // "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(form),
            // })
            //     .then((res) => res.json())
            //     .then((data) => {
            //         // setForm({ firstname: "", lastname: "", email: "", password: "" });
            //         console.log("response from server :", data);

            //     });
            // const headers= {
            //             "Content-Type": "application/json",
            //         }
            
            const response= axios.post("http://localhost:5000/product/register/",form)
            console.log(response);
        }

       

    }

    return (
        // <div>
        //     <div className="container col-md- my-4">
        //         <form>
        //             <div className="my-4">
        //                 <input
        //                     type="text"
        //                     value={form.title}
        //                     onChange={(e) => handleChange(e, "title")}
        //                     className="form-control"
        //                     id="firstname"
        //                     placeholder="Enter Product Name"
        //                 />
        //             </div>
        //             <div className="my-4">
        //                 <input
        //                     type="text"
        //                     value={form.price}
        //                     onChange={(e) => handleChange(e, "price")}
        //                     className="form-control"
        //                     id="lastname"
        //                     placeholder="Enter Product Price"
        //                 />
        //             </div>
        //             <div className="my-4">
        //                 <textarea rows="4"
        //                     type="text"
        //                     value={form.desc}
        //                     onChange={(e) => handleChange(e, "desc")}
        //                     className="form-control"
        //                     id="email"
        //                     placeholder="Enter Product Detail & Discription  "
        //                 />
        //             </div>

        //             <div class="mb-3">
        //                 <input type="file" value={form.image} class="form-control" onChange={(e) => handleChange(e, "image")} />
        //             </div>

        //             <div className="col-auto mt-4">
        //                 <button
        //                     type="submit"
        //                     onClick={submit}
        //                     className="btn btn-primary mb-3"
        //                 >
        //                     Submit
        //                 </button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        <>
        <h3>Add products</h3>
        </>
    )
}

export default Addproduct
