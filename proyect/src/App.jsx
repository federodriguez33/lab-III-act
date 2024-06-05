import './App.css';
import { useState, useEffect, useRef, useCallback } from 'react';

function App() {
  const [Hour, setHour] = useState(0);
  const [Minute, setMinute] = useState(0);
  const [Second, setSecond] = useState(0);
  const [Millisecond, setMillisecond] = useState(0);
  const [IsStart, setIsStart] = useState(false);
  const IsPauseRef = useRef(false);
  const timerRef = useRef(null);

  const Sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const Start = useCallback(async () => {
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 60; j++) {
        for (let k = 0; k < 60; k++) {
          for (let l = 0; l < 100; l++) {
            if (!IsStart) return;
            while (IsPauseRef.current) {
              await Sleep(100);
            }
            setHour(i);
            setMinute(j);
            setSecond(k);
            setMillisecond(l);
            await Sleep(10);
          }
        }
      }
    }
  }, [IsStart]);

  const togglePause = () => {
    IsPauseRef.current = !IsPauseRef.current;
  };

  const stopTimer = () => {
    setIsStart(false);
    clearTimeout(timerRef.current);
  };

  useEffect(() => {
    if (IsStart) {
      timerRef.current = setTimeout(Start, 0);
    }
    return () => clearTimeout(timerRef.current);
  }, [IsStart, Start]);

  const handleStartStop = () => {
    setIsStart((prevIsStart) => !prevIsStart);
    if (!IsStart) {
      setHour(0);
      setMinute(0);
      setSecond(0);
      setMillisecond(0);
    }
  };

  return (
    <>
      <div>
        <h1>
          {String(Hour).padStart(2, '0')}:
          {String(Minute).padStart(2, '0')}:
          {String(Second).padStart(2, '0')}:
          {String(Millisecond).padStart(2, '0')}
        </h1>
      </div>

      <button onClick={handleStartStop}>
        {IsStart ? 'Stop' : 'Start'}
      </button>
      {IsStart && (
        <button onClick={togglePause}>
          {IsPauseRef.current ? 'Resume' : 'Pause'}
        </button>
      )}
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}

export default App;