import { useState } from 'react';
// import qwerty from './assets/qwerty.jpg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Ферма перепелок</h1>
        <img width="400px" src="../public/qwerty.jpg" alt="Перепелка" />
      </div>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          Замовлення в кг: {count}
        </button>
      </div>
      <p className="read-the-docs">Ферма перепелок. Ми вам перетелефонуємою</p>
    </>
  );
}

export default App;
