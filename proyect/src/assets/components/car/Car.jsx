import PropTypes from 'prop-types';

const Car = ({ cartItems, removeFromCart }) => {

    const sum = cartItems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
      }, 0);

    return (

      <div>

        <h2>Carrito de compras</h2>

        {cartItems.length === 0 ? (
          <p>No hay elementos en el carrito</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price} - x{item.quantity}
                <button onClick={() => removeFromCart(item)}>Remover elemento</button>
              </li>
            ))}
          </ul>
        )}

        <p>Total: {sum}</p>

      </div>

    );

  };

  Car.propTypes = {
    cartItems: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired
  };
  
  export default Car;