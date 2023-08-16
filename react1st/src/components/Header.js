import React, { useEffect, useState } from 'react' 
import Badge from '@mui/material/Badge'; 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { DLT } from '../redux/actions/action';
import { AppBar, Avatar, Button, Card, CardContent, CardHeader, CardMedia, Container, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

    const [mytoken, setMyToken] = useState(localStorage.getItem("token"))
    // const token= localStorage.getItem("token")
    const [price, setPrice] = useState(0);
    // console.log(price);

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id) => {
        dispatch(DLT(id))
    }


    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    const logout = () => {
        console.log("logout calls");
        localStorage.clear()
    }

    useEffect(() => {
        total();
    }, [total])


    useEffect(() => {
        // total();
    }, [mytoken])

    return (
        <>
            {/* MATERIAL UI COMPONENTS  */}
            <Container style={{ marginBottom: '63px' }}>
                <AppBar>
                    <Toolbar>
                        <Typography variant='h6' style={{ flexGrow: 1 }}>
                            DEVSTORE
                        </Typography>
                        <Button color='inherit' href='/'>Home</Button>
                        <Button color='inherit' href='/about'>About</Button>
                        <Button color='inherit' href='/contact'>Contact</Button>
                        <NavLink color='inherit' to=''>

                            <ShoppingCartIcon sx={{ color: 'white' }} id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick} />
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >

                                {getdata.map((e, id) =>
                                   ( <Card sx={{ maxWidth: 250 }}>
                                        <CardHeader
                                            action={
                                                <IconButton aria-label="settings">
                                                    {/* <MoreVertIcon /> */}
                                                </IconButton>
                                            }
                                            title={e.title}
                                            subheader="September 14, 2016"
                                        />
                                      <NavLink to={`/cart/${e._id}`}   onClick={handleClose}> <CardMedia
                                            component="img"
                                            height="80"
                                            sx={{width:'120px',marginLeft:'20px'}}
                                            image={e.image}
                                            alt="Paella dish"
                                        /></NavLink>
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {e.desc}
                                            </Typography>
                                        </CardContent>
                                    </Card>)
                                )}

                            </Menu>


                        </NavLink>
                        <Button color='inherit' href='/signup'>Sign Up</Button>
                    </Toolbar>
                </AppBar>
            </Container>
        </>
    )
}

export default Header