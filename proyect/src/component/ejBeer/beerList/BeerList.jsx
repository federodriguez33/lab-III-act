import PropTypes from 'prop-types';

const BeerList = ({ beerName, beerStyle, price, available }) => {

    return(
        <>
        <h2>Cerveza: {beerName}</h2>
        <h3>Estilo {beerStyle}</h3>
        <p>${price * 1000}</p>
        <p>{available}</p>
        </>
    )

};

BeerList.propTypes = {
        beerName: PropTypes.string,
        beerStyle: PropTypes.string,
        price: PropTypes.number,
        available: PropTypes.bool,
      }
  
export default BeerList;