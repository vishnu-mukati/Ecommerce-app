import React, { useState, useContext } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import {Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import CartContext from "../Store/CartContext";
import AuthContext from "../Store/auth-context";

const Navigationbar = () => {
    const [showCart, setShowCart] = useState(false);
    const Cartctx = useContext(CartContext);
    const cartCtx = useContext(AuthContext);

    const clickCartHandler = () => {
        setShowCart(true);
    }

    const closeCartHandler = () => {
        setShowCart(false);
    }

    const logOutHandler = () =>{
        cartCtx.logout();
    }

    const quantity = Cartctx.items.length;

    // const isStorePage = location.pathname === "/store";

    return (
        <Navbar bg="dark" expand="sm" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/store">Store</Nav.Link>
                        <Nav.Link as={Link} to="/about" >About </Nav.Link>
                        <Nav.Link as={Link} to="/contect-us">Contect-Us</Nav.Link>
                        {!cartCtx.isLoggedIn ?   <Nav.Link as={Link} to="/auth">Log In</Nav.Link>:  <button className="btn btn-danger ms-auto" onClick={logOutHandler}>Log Out</button>}
                       

                       
                    </Nav>
                    <Nav className="ms-auto">
                        {cartCtx.isLoggedIn &&
                            <>
                                <Button onClick={clickCartHandler} className="ms-auto btn btn-info">Cart</Button>
                                <Nav.Link variant="danger">{quantity}</Nav.Link>
                            </>
                        }
                        {showCart && <Cart onClose={closeCartHandler} />}
                    </Nav>
                </Navbar.Collapse>
            </Container>


        </Navbar>
    );
}

export default Navigationbar;