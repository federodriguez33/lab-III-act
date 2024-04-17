import { useState } from "react";
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import PropTypes from "prop-types";

const NewBeer = ({ onBeerDataSave, showNewBeerForm }) => {

    const [newName, setNewName] = useState("");
    const [newStyle, setNewStyle] = useState("");
    const [newPrice, setNewPrice] = useState(1);
    const [newAvailable, setNewAvailable] = useState(false);


    const handleNewName = (e) => {
        setNewName(e.target.value);
    };

    const handleNewStyle = (e) => {
        setNewStyle(e.target.value);
    };

    const handleNewPrice = (e) => {
        setNewPrice(e.target.value);
    };

    const handleAvailable = () => {
        setNewAvailable((prevState) => !prevState);
    };

    const newBeerCreate = (event) => {
        event.preventDefault();
        const newBeerCreate = {
            beerName: newName,
            beerStyle: newStyle,
            price: newPrice,
            available: newAvailable
        };

        onBeerDataSave(newBeerCreate);
        setNewName("");
        setNewStyle("");
        setNewPrice(1);
        setNewAvailable(false);

    }

    return (
        <>
        {showNewBeerForm &&
        <div>
            <Card className="m-4 w-100" bg="success">
                <Card.Body>
                    <Form className="text-white" onSubmit={newBeerCreate}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="beerName">
                                    <Form.Label>Nombre cerveza</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresar nombre cerveza"
                                        onChange={handleNewName}
                                        value={newName}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="beerStyle">
                                    <Form.Label>Estilo de cerveza</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresar estilo cerveza"
                                        onChange={handleNewStyle}
                                        value={newStyle}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="beerPrice">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Ingresar precio cerveza"
                                        max={20000}
                                        min={1}
                                        onChange={handleNewPrice}
                                        value={newPrice}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="beerAvailable">
                                    <Form.Label>Disponibilidad</Form.Label>
                                    <Form.Check
                                        type="checkbox"
                                        checked={newAvailable}
                                        onChange={handleAvailable} 
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-end">
                            <Col md={3} className="d-flex justify-content-end">
                                <Button variant="primary" type="submit">
                                    Agregar cerveza
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>}
        </>
    );

};

NewBeer.propTypes = {
    onBeerDataSave: PropTypes.func.isRequired,
    showNewBeerForm: PropTypes.bool
};

export default NewBeer