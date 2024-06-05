import PropTypes from 'prop-types';

const Cronometro = ({ tiempo }) => {

  const minutos = Math.floor(tiempo / 6000);
  const segundos = Math.floor((tiempo % 6000) / 100);
  const centesimas = tiempo % 100;

  const formatearTiempo = (value) => value.toString().padStart(2, '0');

  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>{formatearTiempo(minutos)}:</div>
      <div>{formatearTiempo(segundos)}:</div>
      <div>{formatearTiempo(centesimas)}</div>
    </div>

  );
  
}

Cronometro.propTypes = {
    tiempo: PropTypes.number.isRequired,
  };

export default Cronometro;

