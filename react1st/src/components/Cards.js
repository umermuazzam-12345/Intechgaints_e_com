import React, { useEffect, useState } from 'react' 
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';   
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'; 
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors'; 
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';


const Cards = () => {
  const token = localStorage.getItem("token")

  const [data, setData] = useState([]);
  // console.log(data);

  useEffect(async () => {
    fetchData()
  }, [])
  async function fetchData() {
    console.log("fetchData");
    const response = await fetch("http://localhost:5000/product/fetch");
    const res = await response.json();
    console.log(res);
    setData(res)
  }

  const dispatch = useDispatch();


  const send = (e) => {
    console.log("send to cart");
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>

                <Card sx={{ maxWidth: 345, margin: '10px' }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        Itg
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={element.title}
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={element.image}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {element.desc}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {element.price} PKR
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Button onClick={() => send(element)} variant="contained" sx={{ width: '100%' }} color="success">
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards