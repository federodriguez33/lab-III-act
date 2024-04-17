import './App.css'
import { useState } from "react";
import beers from "./component/beers/Beers";
import ChangeDollar from "./component/changeDollar/ChangeDollar";
import NewBeer from "./component/newBeer/NewBeer";
import { Card, Row, Col, Button } from 'react-bootstrap';

function App() {

  const [changeDollar, SetChangeDollar] = useState()
  const [showChangeDollarForm, setShowChangeDollarForm] = useState(false);
  const [beerss, setBeer] = useState(beers)
  const [showNewBeerForm, setShowNewBeerForm] = useState(false);

  const handleButtonClickChangeDollar = () => {
    setShowChangeDollarForm(!showChangeDollarForm);
  };

  const handleButtonClickNewBeer = () => {
    setShowNewBeerForm(!showNewBeerForm);
  };

  const saveNewBeerData = (enteredNewBeerData) => {
    const beerData = {
      ...enteredNewBeerData,
      id: Math.random().toString(),
    };
    setBeer((prev) => [...prev, beerData]);
  };

  // try {
  //   fetch("https://dolarapi.com/v1/dolares/oficial")
  //     .then(response => response.json())
  //     .then(response => {
  //       let data = response
  //       console.log(data)
  //       let precio = data.compra
  //       let precioDolar = PrecioDollar(precio)
  //     });
  // } catch (error) {
  //   console.error("Se produjo un error:", error);
  // }

  // const PrecioDollar = (precio) => {;

  //   return(precio)

  // }


  return (

    <>

      <div className='d-flex flex-column justify-content-center align-items-center'>
        <Button onClick={handleButtonClickChangeDollar}>{showChangeDollarForm ? "Cerrar" : "Cambiar precio del dolar"}</Button>
        <ChangeDollar changeDollar={changeDollar} setChangeDollar={SetChangeDollar} showChangeDollarForm={showChangeDollarForm}/>
      </div>

      <div className='d-flex flex-column justify-content-center align-items-center'>
        <Button onClick={handleButtonClickNewBeer}>{showNewBeerForm ? "Cerrar" : "Ingresar nueva cerveza"}</Button>
        <NewBeer onBeerDataSave={saveNewBeerData} showNewBeerForm={showNewBeerForm} />
      </div>


      <h1 className='mb-4'>Carta completa</h1>
      <Row xs={1} md={3} className="g-4">
        {beerss.map((beer) => (
          <>
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col key={idx}>
                <Card className="card text-bg-light mb-3 shadow">
                  <Card.Body>
                    <Card.Title>Cerveza: {beer.beerName}</Card.Title>
                    <Card.Subtitle>Estilo {beer.beerStyle}</Card.Subtitle>
                    {/* <p>Precio: {beer.price * PrecioDollar()}</p> */}
                    <p>Precio: ${changeDollar ? beer.price * changeDollar : beer.price}</p>
                    <p>Disponible: {beer.available ? "si" : "no"}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        ))}
      </Row>

    </>

  )

}


export default App