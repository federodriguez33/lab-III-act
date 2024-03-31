import PropTypes from 'prop-types';

const CantRedIpa = ({ beers }) => {

    const redBeers = beers.filter(beer => beer.beerStyle === 'Red');
    const ipaBeers = beers.filter(beer => beer.beerStyle === 'IPA');
  
    return (
      <div>
        <h2>Conteo de Cervezas</h2>
        <p>Cantidad de cervezas de estilo Red: {redBeers.length}</p>
        <p>Cantidad de cervezas de estilo IPA: {ipaBeers.length}</p>
      </div>
    );
  };

  CantRedIpa.propTypes = {
    beers: PropTypes.array
  };
  
  export default CantRedIpa;