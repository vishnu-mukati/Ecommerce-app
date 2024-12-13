import { Button, Container, Row, Col, Table } from "react-bootstrap";


const tourdata = [
    {
        date: "JUL 16",
        place: "DETROIT,MI",
        Theatre: "DTEENERGYMUSICTHEATRE",
    },
    {
        date: "JUL 19",
        place: "TORONTO,ON",
        Theatre: "BUDWEISER STAGE",
    },
    {
        date: "JUL 22",
        place: "BRISTOW, VA",
        Theatre: "jIGGY LUBE LIVE",
    },
    {
        date: "JUL 29",
        place: "PHOENIX, AZ",
        Theatre: "AK-CHIN PAVILION",
    },
    {
        date: "AUG 2",
        place: "LAS VEGAS, NV",
        Theatre: "T-MOBILE ARENA",
    },
    {
        date: "AUG 7",
        place: "CONCORD, CA",
        Theatre: "CONCORD PAVILION",
    },

]

const Home = () => {
    return (
        <>
            <h1 className="text-center">Tours</h1>
            <Container > 
                <Row className="mt-4">
                    <Col className="text-center col-xxl">
                        <Table striped bordered hover style={{ width: "100%" }}>
                            <tbody>
                                {tourdata.map((item , index) => {
                                    return (
                                        <tr key={index} style={{ borderBottom: "1px solid black" }}>
                                            <td>{item.date}</td>
                                            <td>{item.place}</td>
                                            <td>{item.Theatre}</td>
                                            <td>{<Button variant="info">BUY TICKETS</Button>}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>

                        </Table>
                    </Col>
                </Row>
            </Container>

            <div className="text-center">
                <Row>
                    <Col className="col-xxl" style={{
                        boxSizing: "border-box",
                        color: "white",
                        background: "rgb(86, 204, 242)",
                        marginTop: "40px",
                        paddingTop: "40px",
                        paddingBottom: "26px",
                    }}><h1>The Generics</h1></Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </div>
        </>
    );
}

export default Home;