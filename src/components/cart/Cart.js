import React, { useContext } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import classes from "./Cart.module.css";
import CartContext from "../Store/CartContext";

const Cart = (props) => {

    const cartContext = useContext(CartContext);
    const cartItems = cartContext.items;


    const removeFromCartHandler = (id) => {
        cartContext.removeItem(id);
    }

    return (
        <>
            <section className={classes.cart}>
                <Button onClick={props.onClose} style={{ float: "right" }}>X</Button>
                <div>
                    <p className="text-center" style={{fontWeight: "bold" }}>Cart</p>
                    <Container>
                        <Row>
                            <Col>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr >
                                            <th style={{ borderBottom: "2px solid black" }}>ITEM</th>
                                            <th style={{ borderBottom: "2px solid black" }}>PRICE</th>
                                            <th style={{ borderBottom: "2px solid black" }}>QUANTITY</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((Elements, index) => {
                                            return (
                                                <tr key={index} style={{ verticalAlign: "middle" }}>
                                                    <td>
                                                        <img src={Elements.image} alt="color image" width="90" />

                                                        {Elements.title}

                                                    </td>
                                                    <td >{Elements.price}</td>
                                                    <td >{Elements.quantity}{<Button variant="danger" onClick={(() => { removeFromCartHandler(Elements.id, Elements.price) })}>REMOVE</Button>}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot> 
                                        <tr>
                                            <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>
                                                Total:
                                            </td>
                                            <td>${cartContext.totalAmount.toFixed(2)}</td>
                                        </tr>
                                    </tfoot>
                                </Table>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default Cart;