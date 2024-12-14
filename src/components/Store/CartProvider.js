import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const initialState = [
        {
            id: 1,
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            reviews : "4★ it is a good product"
        },
        {
            id: 2,
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            reviews : "5★ nice product"
        },
        {
            id: 3,
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            reviews : "3★ good"
        },
        {
            id: 4,
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            reviews : "5★ it is a good product"
        }
    ]

    const [products,setProducts] = useState(initialState)
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    console.log(products);


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
        products : products,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>;
};

export default CartProvider;