import './App.css'
import Beers from "./component/beers/Beers";

function App() {


  return (

    <>
      <h2>Cerveza: {beerName}</h2>
      <h3>Estilo {beerStyle}</h3>
      <p>${price * 1000}</p>
      <p>{available}</p>
    </>

  )

}

export default App