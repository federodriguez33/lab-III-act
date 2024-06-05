import { useState, useEffect } from 'react';
import TimeDisplay from './assets/components/timeDisplay/TimeDisplay';

function App() {
  const [time, setTime] = useState(0); // tiempo en centésimas de segundo
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [running]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div>
      <TimeDisplay time={time} />
      <button onClick={handleStart}>Iniciar</button>
      <button onClick={handleStop}>Detener</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
}

export default App;
