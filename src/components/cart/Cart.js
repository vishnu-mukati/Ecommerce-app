import { Button, Container, Row, Col, Table } from "react-bootstrap";

const Cart = ({onClose}) => {

    const cartElements = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        }
    ]

    return (
        <>
            <button onClick={onClose} style={{ float: "right" }}>X</button>
            <div>
                <p className="text-center">Cart</p>
                <Container>
                    <Row>
                        <Col>
                            <Table>
                                <thead>

                                    <tr>
                                        <th>ITEM</th>
                                        <th>PRICE</th>
                                        <th>QUANTITY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartElements.map((Elements, index) => {
                                        return (
                                            <tr key={index}>
                                                <td><img src={Elements.imageUrl} alt="color image" />{Elements.title}</td>
                                                <td>{Elements.price}</td>
                                                <td>{Elements.quantity}{<Button variant="danger">REMOVE</Button>}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>






        // <div className="container">
        //     {cartElements.map((Elements, index) => {
        //         return (
        //             <>
        //                 <div>
        //                     <img src={Elements.imageUrl} alt="image of a color" />
        //                     <h4>{Elements.title}</h4>
        //                 </div>
        //                 <div>
        //                     <h4>{Elements.price}</h4>
        //                 </div>
        //                 <div>
        //                     <h4>{Elements.quantity}</h4>
        //                     <Button variant="danger">REMOVE</Button>
        //                 </div>
        //             </>
        //         );
        //     })}
        // </div>
    );
}

export default Cart;