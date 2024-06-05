import PropTypes from 'prop-types'; // Importa PropTypes desde 'prop-types'

function TimeDisplay({ time }) {
  const minutes = Math.floor(time / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const centiseconds = time % 100;

  const formatTime = (value) => value.toString().padStart(2, '0');

  return (
    <div>
      <span>{formatTime(minutes)}:</span>
      <span>{formatTime(seconds)}:</span>
      <span>{formatTime(centiseconds)}</span>
    </div>
  );
}

// Definición de PropTypes
TimeDisplay.propTypes = {
  time: PropTypes.number.isRequired, // time debe ser un número y es requerido
};

export default TimeDisplay;

