import { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ onLogin, users }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {

    event.preventDefault();

    if (username === "" && password === "") { alert("Complete los campos"); return }

    const validacion = users.find(user => user.username === username && user.password === password);

    if (validacion) {
      onLogin();
    } else {
      alert('Usuario y/o password incorrecto/s');
    }

  };

  return (

    <>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>

    </>

  );

};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default Login;