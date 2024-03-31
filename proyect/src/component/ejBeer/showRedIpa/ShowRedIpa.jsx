import PropTypes from 'prop-types';

const ShowRedIpa = ({ beers }) => {
    
    const beerStyle = new Set(beers.map(beer => beer.beerStyle));

    return (
        <div>
            {[...beerStyle].map((b) => (
                <p key={b}>{b}</p>
            ))}
        </div>
    );
}

ShowRedIpa.propTypes = {
    beers: PropTypes.array,
}

export default ShowRedIpa;