import React, { Fragment, useContext } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import classes from "./productitem.module.css";
import CartContext from "../Store/CartContext";
import { Link } from "react-router-dom";
const ProductItem = (props) => {

    const dataobj = {
        id: props.id,
        title: props.title,
        image: props.image,
        reviews : props.reviews,
        price: props.price,
    };

    console.log(dataobj);
    const cartctx = useContext(CartContext);
    const addtoCartHandler = (data) => {
        cartctx.addItem({ ...data, quantity: 1 });
    }

    

//    const data =  cartctx.products.findIndex((i)=>i.id===props.id).filter();

//    const product = data[0];
    
    

    return (

        <Fragment>
            <div className="container text-center mt-4">
                <div className="row">
                    <div className="col-lg-4 mb-5" key={props.index}>
                        <div className={classes.productCard}>
                            <h3>{props.title}</h3>
                            <div className={classes.imageWrapper}>
                                <Link 
                                    to= {`/product-details/${props.id}`}
                                    // state: { product: dataobj }, // Pass the product object
                                ><img
                                        src={props.image}
                                        alt="Product"
                                    />
                                </Link>
                            </div>
                            <p>${props.price}</p>
                            <Button variant="info" className="col-lg-4" onClick={(() => { addtoCartHandler(dataobj) })}>
                                ADD TO CART
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    );
}


export default ProductItem;