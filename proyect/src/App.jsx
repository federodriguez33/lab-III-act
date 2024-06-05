import { useState, useEffect } from 'react';
import Cronometro from './assets/components/cronometro/Cronometro';


function App() {

  const [tiempo, setTiempo] = useState(0);
  const [empezar, setEmpezar] = useState(false);

  useEffect(() => {
    let timer;
    if (empezar) {
      timer = setInterval(() => {
        setTiempo(prevTime => prevTime + 1);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [empezar]);

  const handleEmpezar = () => setEmpezar(true);
  const handleFrenar = () => setEmpezar(false);
  const handleResetear = () => {
    setEmpezar(false);
    setTiempo(0);
  };

  return (
    <>
      <Cronometro tiempo={tiempo} />
      <div>
        <button onClick={handleEmpezar}>Iniciar</button>
        <button onClick={handleFrenar}>Detener</button>
        <button onClick={handleResetear}>Reiniciar</button>
      </div>
    </>
  );
}

export default App;