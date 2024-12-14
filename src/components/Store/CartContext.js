import React from "react";

const CartContext = React.createContext({
    items: [],
    products : [],
    totalAmount: 0,
    addItem: ((item) => {}),
    removeItem: ((id) => {}),

});

export default CartContext;