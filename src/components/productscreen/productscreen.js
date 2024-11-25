import React from "react";
import ProductItem from "../productitem/productitem";


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
    return (

        <section>
            <ul>
                {productsArr.map((product,index)=><ProductItem key={index} id={index} title={product.title} image={product.imageUrl} price={product.price}/>)}
            </ul>
        </section>
    );
}

export default ProductScreen;