//import React from 'react';
import './App.css';
import beers from "./component/ejBeer/beers/Beer";
import BeerList from "./component/ejBeer/beerList/BeerList";
import AvailList from "./component/ejBeer/availBeer/AvailBeer";
import CantRedIpa from "./component/ejBeer/cantRedIpa/CantRedIpa";
import ShowRedIpa from "./component/ejBeer/showRedIpa/ShowRedIpa";

function App() {
  
  const answ = prompt("Num de ejercicio (1-4)");

  return (
    <div>
      
      {answ === "1" && (
        <>
          <h1>Carta completa</h1>
          {beers.map((beer) => (
            <BeerList
              key={beer.id}
              beerName={beer.beerName}
              beerStyle={beer.beerStyle}
              price={beer.price}
              available={beer.available}
            />
          ))}
        </>
      )}

      {answ === "2" && (
        <>
          <h1>Solo cervezas disponibles</h1>
          {beers.map((beer) => (
            <AvailList
              key={beer.id}
              beerName={beer.beerName}
              beerStyle={beer.beerStyle}
              price={beer.price}
              available={beer.available}
            />
          ))}
        </>
      )}

      {answ === "3" && (
        <>
          <h1>Cantidad de Red e IPAs</h1>
          <CantRedIpa beers={beers} />
        </>
      )}

      {answ === "4" && (
        <>
          <h1>Mostrando Red e IPAs</h1>
          <ShowRedIpa beers={beers} />
        </>
      )}

      
    </div>
  );
}

export default App;