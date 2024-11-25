import React, { Fragment, useContext } from "react";
import { Button } from "react-bootstrap";
import classes from "./productitem.module.css";
import CartContext from "../store/Cart-Context";
const ProductItem = (props) => {

    const dataobj = {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
    }


    const cartctx = useContext(CartContext);
    const addtoCartHandler = (data) => {
         cartctx.addItem({...data ,quantity:1});
    }

    return (

        <Fragment>
            <div className="container text-center mt-4">
                <div className="row">
                    <div className="col-lg-6 mb-6" key={props.index}>
                        <div className={classes.productCard}>
                            <h3>{props.title}</h3>
                            <div className={classes.imageWrapper}>
                                <img
                                    src={props.image}
                                    alt="Product"
                                />
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