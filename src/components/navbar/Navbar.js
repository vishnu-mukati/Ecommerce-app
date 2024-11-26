import React, { useState, useContext } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import Cart from "../cart/Cart";
import CartContext from "../store/Cart-Context";

const Navigationbar = () => {
    const [showCart, setShowCart] = useState(false);
    const Cartctx = useContext(CartContext);

    const location = useLocation();

    const clickCartHandler = () => {
        setShowCart(true);
    }

    const closeCartHandler = () => {
        setShowCart(false);
    }

    const quantity = Cartctx.items.length;

    const isStorePage = location.pathname === "/store";

    return (
        <Navbar bg="dark" expand="sm" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/store">Store</Nav.Link>
                        <Nav.Link href="/about" >About </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {isStorePage &&
                            <>
                                <Button onClick={clickCartHandler} className="ms-auto">Cart</Button>
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