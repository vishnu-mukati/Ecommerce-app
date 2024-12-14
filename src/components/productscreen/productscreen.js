import React from "react";
import ProductItem from "../ProductItem/ProductItem";


const productsArr = [
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

const ProductScreen = () => {

    return (

        <section>
            <ul>
                    {productsArr.map((product) => <ProductItem key={product.id} id={product.id} title={product.title} image={product.imageUrl} reviews={product.reviews} price={product.price} />)}
            </ul>
        </section>
    );
}

export default ProductScreen;