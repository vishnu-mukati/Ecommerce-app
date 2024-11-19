import React,{useContext} from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import classes from "./Cart.module.css";
import CartContext from "../store/Cart-Context";

const Cart = (props) => {
      
    const cartContext = useContext(CartContext);
    const cartItems = cartContext.items;

    return (
        <>
            <section className={classes.cart}>
                <Button onClick={props.onClose} style={{ float: "right" }}>X</Button>
                <div>
                    <p className="text-center">Cart</p>
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
                                                        <img src={Elements.imageUrl} alt="color image" width="90" />
                                                        
                                                            {Elements.title}
                                                       
                                                    </td>
                                                    <td >{Elements.price}</td>
                                                    <td >{Elements.quantity}{<Button variant="danger">REMOVE</Button>}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
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