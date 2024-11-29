import React, { useEffect, useState } from 'react';
import { fetchMessage } from './ApiService';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getMessage = async () => {
      const msg = await fetchMessage();
      setMessage(msg);
    };
    getMessage();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
