import { useEffect, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function url(path: string) {
  if (import.meta.env.NODE_ENV === 'development') {
    return path;
  }
  return import.meta.env.API_URL + path;
}

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Getting message...');

  useEffect(() => {
    fetch(url('/api')).then(async (res) => {
      const message = await res.json();
      setMessage(message);
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">{message}</p>
    </>
  );
}

export default App;
