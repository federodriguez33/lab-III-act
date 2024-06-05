import { useState } from 'react';
import Login from './components/login/Login';

const users = [
  {
    username: 'user1',
    password: '123',
  },
  {
    username: 'user2',
    password: '123',
  },
  {
    username: 'user3',
    password: '123',
  }
];

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (

    <div>

      {isLoggedIn ? (
        <h1>Bienvenido usuario querido!</h1>
      ) : (
        <Login onLogin={handleLogin} users={users} />
      )}

    </div>

  );

};

export default App;