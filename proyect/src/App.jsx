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
          <CardBody>
          <h2>Cerveza: {beer.beerName}</h2>
          <h3>Estilo {beer.beerStyle}</h3>
          <p>${beer.price}</p>
          <p>{beer.available}</p>
          {/* key={beer.id} */}
          </CardBody>
          </Card>
        </>
      ))}




    </>

  )

}

export default App