import { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ onLogin, users }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user1 = users[0];

  const userActive = () => {

  const bandera = users[0].username.includes("user2");
  console.log(bandera);

}

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user1.username === 'user1' && user1.password === '123' && username != "" && password != "") {
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

    <button onClick={userActive}>Usuario Activo</button>
    </>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default Login;