import React, { useState } from "react";
import Cart from "../cart/Cart";

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);


    const clickCartHandler = () => {
        setShowCart(true);
    }

    const closeCartHandler = () => {
          setShowCart(true);
    }

    return (
        <div>

            <button onClick={clickCartHandler}>Cart</button>
            {showCart && <Cart onClick={clickCartHandler}/>}
        </div>
    );
}

export default Navbar;