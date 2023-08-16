import React, { useEffect, useState } from 'react' 
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT, ADD, REMOVE } from '../redux/actions/action'


const CardsDetails = () => {

  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();


  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log("Get data ", getdata);
  console.log("id ", id);


  const compare = () => {
    var comparedata = getdata.filter((e) => {
      return e._id == id
    });
    setData(comparedata);
    console.log("compare data ", comparedata);
    console.log("data ", data);
  }

  // add data


  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  }

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  }

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item))
  }


  useEffect(() => {
    compare();
  }, [id])

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
            {
              data.map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.image} alt="" />
                    </div>

                    <div className="details" style={{display:'flex' ,height:'60vh',justifyContent:'center',flexDirection:'column'}}>
                      {/* <Table>
                <tr>
                  <td>
                    <p> <strong>Product</strong>  : {ele.title}</p>
                    <p> <strong>Price</strong>  : {ele.price} <b>PKR</b></p>
                    <p> <strong>Description</strong>  : {ele.desc}</p>
                    <p> <strong>Total</strong>  : {ele.price * ele.qnty} <b>PKR</b></p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele._id) : ()=>remove(ele)}>-</span>
                    <span style={{fontSize:22}}>{ele.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>4.5 ★	</span></p>
                    <p><strong>Order Review :</strong> <span >Over 150 items saleout last month</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={()=>dlt(ele._id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
                </tr>
              </Table> */}
                      <div >
                        <span><b>Product :</b></span> <span>{ele.title}</span>
                      </div>
                      <div>
                        <span><b>Price :</b></span> <span>{ele.price}</span>
                      </div>
                      <div>
                        <span><b>Description :</b></span> <span>{ele.desc}</span>
                      </div>
                      <div style={{backgroundColor:'gray',width:'20%',borderRadius:'3px', display:'flex',justifyContent:'space-around',color:'white',cursor:'pointer'}}>
                      <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele._id) : () => remove(ele)}>-</span>
                      <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                      <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>
                      </div>
                    </div>

                  </>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails