import { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../Store/CartContext";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const ProdutDetail = () =>{
    const params=useParams();
    console.log(params.id);;

    const location = useLocation();
    const product = location.state?.product;
    console.log(product);

    const cartctx = useContext(CartContext);
    console.log(cartctx.items);
    return (
        <section className="text-center">
            <img className="ms-5 mt-5"src={product.image} alt={product.title} />
            <h1 className="ms-5 mt-2">Ratings & Reviews</h1>
            <h3>{product.reviews}</h3>
        </section>
    );
}

export default ProdutDetail;    