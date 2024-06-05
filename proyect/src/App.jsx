import { useState } from 'react';
import Car from "./assets/components/car/Car"

const App = () => {

  const [products, setProducts] = useState([
    { name: 'MANZANA', price: 1, stock: 10 },
    { name: 'BANANA', price: 1, stock: 20 },
    { name: 'NARANJA', price: 2, stock: 15 },
  ]);

  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newStock, setNewStock] = useState(0);

  const handleAddProduct = () => {
    const newProduct = {
      name: newName.toUpperCase(),
      price: parseInt(newPrice),
      stock: parseInt(newStock),
    };

    if (newProduct.name === "" || newProduct.price === 0 || newProduct.stock === 0) {
      alert("Debes rellenar todos los campos");
      return;
    }

    const existingProductI = products.findIndex(item => item.name === newProduct.name);

    if (existingProductI >= 0) {

      // El producto ya existe, actualiza el precio y el stock
      const updatedProducts = products.map((product, index) => {
        if (index === existingProductI) {
          return {
            ...product,
            price: newProduct.price,
            stock: parseInt(product.stock) + parseInt(newProduct.stock)
          };
        }
        return product;
      });
      setProducts(updatedProducts);
      setNewName("");
      setNewPrice("");
      setNewStock("");
    } else {
      setProducts([...products, newProduct]);
      setNewName("");
      setNewPrice("");
      setNewStock("");
    }

  };

  const [mostrarFormAddProduct, setMostrarFormAddProduct] = useState(false);

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

    // Actualizar el stock al agregar un producto al carrito
    const updatedProducts = products.map(item => {
      if (item.name === product.name) {
        return { ...item, stock: item.stock - 1 };
      } else {
        return item;
      }
    });
    setProducts(updatedProducts);

  };

  const removeToList = (productRemove) => {

    const updatedproductList = products.filter(item => item.name != productRemove.name);
    setProducts(updatedproductList);

  }

  const removeFromCart = (productToRemove) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.name === productToRemove.name) {
        if (item.quantity > 1) {
          // Si la cantidad es mayor que 1, simplemente restamos 1 a la cantidad
          return { ...item, quantity: item.quantity - 1 };
        } else {
          // Si la cantidad es 1, eliminamos el elemento del carrito
          return null;
        }
      } else {
        return item;
      }
    }).filter(item => item !== null); // Eliminamos elementos nulos (con cantidad 0) del carrito
    setCartItems(updatedCartItems);

    // Actualizar el stock al eliminar un producto del carrito
    const updatedProducts = products.map(item => {
      if (item.name === productToRemove.name) {
        return { ...item, stock: item.stock + 1 };
      } else {
        return item;
      }
    });
    setProducts(updatedProducts);

  };

  return (

    <div>

      <h1>Lista de productos</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price} - {product.stock}
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            <button onClick={() => removeToList(product)}>Borrar</button>
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
          <label>Cantidad:</label>
          <input
            type="number"
            value={newStock}
            onChange={(e) => setNewStock(e.target.value)}
          />

          <button type="button" onClick={handleAddProduct}>Agregar</button>

        </form>
      }

    </div>

  );

};


export default App;