import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

       

    const addItemToCartHandler = (item) => {
            const existingElementindex = items.findIndex((i) => i.id === item.id);
            if (existingElementindex === -1) {
                setItems((prevItems) => {
                    return [...prevItems, item];
                });
            }
            else {
                const temp = [...items];
                temp[existingElementindex].quantity = temp[existingElementindex].quantity + item.quantity;
                setItems(temp);
            }
    }

        const removeItemFromCartHandler = (id) => {
            setItems((prevItems) => prevItems.filter(item => item.id !== id));
        };

        const increaseQuantityHandler = (itemId) => {
            setItems((prevState) => {
                return (
                    prevState.map((item) => (
                        item.id === itemId ? { ...item, amount: item.amount + 1 } : item
                    ))
                );
            })
        };

        const cartContext = {
            items: items,
            totalAmount: totalAmount,
            addItem: addItemToCartHandler,
            removeItem: removeItemFromCartHandler,
            increaseQuantity: increaseQuantityHandler,
        };

        return <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>;
    };

    export default CartProvider;