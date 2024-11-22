import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import classes from "./productscreen.module.css";
import CartContext from "../store/Cart-Context";


const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]

const ProductScreen = () => {

    const cartContext = useContext(CartContext);
    


    const addToCartHandler = (product) => {
        const productWithQuantity = { ...product,quantity :1}; // Add quantity here
        cartContext.addItem(productWithQuantity);
    }
    
    console.log(cartContext.items);
    return (
        <>
            <div className="container text-center mt-4">
                <div className="row">
                    {productsArr.map((product, index) => {
                        return (
                            <div className="col-lg-6 mb-6" key={index}>
                                <div className={classes.productCard}>
                                    <h3>{product.title}</h3>
                                    <div className={classes.imageWrapper}>
                                        <img
                                            src={product.imageUrl}
                                            alt="Product"
                                        />
                                    </div>
                                    <p>${product.price}</p>
                                    <Button variant="info" className="col-lg-4" onClick={() => {addToCartHandler(product) }}>
                                        ADD TO CART
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ProductScreen;