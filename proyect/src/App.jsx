import { useState } from 'react';
//import Login from './components/login/Login';
import Car from './components/car/Car';

const App = () => {

  // Login
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const users = [
  //   {
  //     username: 'user1',
  //     password: '123',
  //   },
  //   {
  //     username: 'user2',
  //     password: '123',
  //   },
  //   {
  //     username: 'user3',
  //     password: '123',
  //   }
  // ];

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // Carrito
  const [products, setProducts] = useState([
    { name: 'Apple', price: 1 },
    { name: 'Banana', price: 1 },
    { name: 'Orange', price: 2 },
  ]);

  const handleAddProduct = () => {
    const newProduct = {
      name: newName,
      price: newPrice,
    };
    setProducts([...products, newProduct]);
    setNewName("");
    setNewPrice("");
    
  };

  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const [mostrarFormAddProduct, setMostrarFormAddProduct] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {

    const existingProductIndex = cartItems.findIndex(item => item.name === product.name);

    if (existingProductIndex >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[existingProductIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (

    <div>

      {/* Login */}
      {/* {isLoggedIn ? (
        <h1>Bienvenido usuario querido!</h1>
      ) : (
        <Login onLogin={handleLogin} users={users} />
      )} */}

      <h1>Lista de productos</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
      <Car cartItems={cartItems} removeFromCart={removeFromCart} />

      <button onClick={() => setMostrarFormAddProduct(!mostrarFormAddProduct)}>
        {mostrarFormAddProduct ? "Cerrar" : "Agregar productos"}
      </button>

      {mostrarFormAddProduct &&
        <form action="">
          <label>Producto:</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <label>Precio:</label>
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />

          <button type="button" onClick={handleAddProduct}>Agregar</button>

        </form>
      }

    </div>

  );

};


export default App;