import { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../Store/CartContext";

const ProdutDetail = () =>{
    const params=useParams();

    const cartctx = useContext(CartContext);

    
    // const product = cartctx.products.findIndex((i) => i.id === params.id);
    const product = cartctx.products.find((i) => i.id === parseInt(params.id));
   

    return (
        <section className="text-center">
            <img className="ms-5 mt-5"src={product.imageUrl} alt={product.title} />
            <h1 className="ms-5 mt-2">Ratings & Reviews</h1>
            <h3>{product.reviews}</h3>
        </section>
    );
}

export default ProdutDetail;    