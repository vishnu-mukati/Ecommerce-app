import React from "react";

const CartContext = React.createContext({
    items: [],
    products : [],
    totalAmount: 0,
    addItem: ((item,emailid) => {}),
    removeItem: ((id) => {}),

});

export default CartContext;