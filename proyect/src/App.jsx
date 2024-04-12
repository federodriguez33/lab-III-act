import './App.css'
import beers from "./component/beers/Beers";
import { Card } from 'react-bootstrap';

function App() {


  return (

    <>

      <h1>Carta completa</h1>

      {beers.map((beer) => (
        <>
        <Card>
          <Card.Body>
          <Card.Title>Cerveza: {beer.beerName}</Card.Title>
          <Card.Subtitle>Estilo {beer.beerStyle}</Card.Subtitle>
          <p>${beer.price}</p>
          <Card.Title>{beer.available}</Card.Title>
          </Card.Body>
          </Card>
        </>
      ))}




    </>

  )

}

export default App