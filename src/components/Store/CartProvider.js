    import React, { useState, useEffect, useContext } from "react";
    import CartContext from "./CartContext";
    import AuthContext from "./auth-context";
    import axios from "axios";

    const CartProvider = (props) => {
        const initialState = [
            {
                id: 1,
                title: 'Colors',
                price: 100,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
                reviews: "4★ it is a good product"
            },
            {
                id: 2,
                title: 'Black and white Colors',
                price: 50,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
                reviews: "5★ nice product"
            },
            {
                id: 3,
                title: 'Yellow and Black Colors',
                price: 70,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
                reviews: "3★ good"
            },
            {
                id: 4,
                title: 'Blue Color',
                price: 100,
                imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
                reviews: "5★ it is a good product"
            }
        ]



        const [products, setProducts] = useState(initialState)
        const [items, setItems] = useState([]);
        const [totalAmount, setTotalAmount] = useState(0);
        const authCtx = useContext(AuthContext);


          
    
            const emailid = authCtx.email.replace(/[@.]/g, "");
          console.log(emailid);
    
        
        useEffect(() => {
            const calculatedTotalAmount = items.reduce((total, item) => {
                return total + item.item.price * item.item.quantity;
            }, 0);
            setTotalAmount(calculatedTotalAmount);
        }, [items]);


        useEffect(() => {
            getdata(emailid);
        }, [])

        
        async function getdata(emailid) {
            try {
                const response = await axios.get(`https://crudcrud.com/api/c7141d80f5504b3a9297ac77f2f8b9c1/cart${emailid}`);
                
                setItems(response.data);
            } catch (err) {
                console.log(err.message);
            }
        }

        async function addItemToCartHandler(item,emailid) {
            
            const existingdata = items.findIndex((i) => i.item.id === item.id);

            if (existingdata === -1) {

                try {
                    const token = 'user2';
                    console.log(item);
                    const response = await axios.post(`https://crudcrud.com/api/c7141d80f5504b3a9297ac77f2f8b9c1/cart${emailid}`, {
                        item,
                    })
                    setItems((prevState) => {
                        return (
                            [...prevState, response.data]
                        );
                    });
                
                } catch (err) {
                    console.log(err.message);
                }

            }
            else {
                alert('this item is already exist');
            }





        }


        async function removeItemFromCartHandler (id, price){
            setTotalAmount((prevState) => prevState - price);
            console.log(id);
            console.log(emailid);
            try{
                const response = await axios.delete(`https://crudcrud.com/api/c7141d80f5504b3a9297ac77f2f8b9c1/cart${emailid}/${id}`)
                setItems((prevItems) => prevItems.filter((item) => item._id !== id))
            
            }catch(err){
            console.log(err.message);
            }

        };



        const cartContext = {
            items: items,
            totalAmount: totalAmount,
            products: products,
            addItem: addItemToCartHandler,
            removeItem: removeItemFromCartHandler,
        };

        return <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>;
    };

    export default CartProvider;