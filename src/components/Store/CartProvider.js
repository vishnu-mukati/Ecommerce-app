import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);



    useEffect(() => {
        const calculatedTotalAmount = items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
        setTotalAmount(calculatedTotalAmount);
    }, [items]);


    const addItemToCartHandler = (item) => {
        const existingdata = items.findIndex((i) => i.id === item.id);
        if (existingdata === -1) {
            setItems((prevState) => {
                return (
                    [...prevState, item]
                );
            });
        }
        else {
            alert('this item is already exist');
        }
    }

    const removeItemFromCartHandler = (id, price) => {

        setTotalAmount((prevState) => prevState - price);
        setItems((prevItems) => prevItems.filter((item) => item.id !== id)) 
    };



    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>;
};

export default CartProvider;