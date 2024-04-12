import './App.css'
//import { useState } from "react";
import beers from "./component/beers/Beers";
//import ChangeDollar from "./component/changeDollar/ChangeDollar";
import { Card, Row, Col } from 'react-bootstrap';

function App() {

  // const [changeDollar, SetChangeDollar] = useState(1)

  return (

    <>

      {/* <Button onClick={ChangeDollar}>Cambiar precio dolar</Button> */}

      <h1 className='mb-4'>Carta completa</h1>
      <Row xs={1} md={3} className="g-4">
        {beers.map((beer) => (
          <>
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col key={idx}>
                <Card className="card text-bg-light mb-3 shadow">
                  <Card.Body>
                    <Card.Title>Cerveza: {beer.beerName}</Card.Title>
                    <Card.Subtitle>Estilo {beer.beerStyle}</Card.Subtitle>
                    <p>Precio: ${beer.price}</p>
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